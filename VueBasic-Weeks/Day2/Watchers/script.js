const app = Vue.createApp({
    data() {
        return {
            chbxVal: false,
            rangeVal: 70,
            xPos: 0,
            xDiff: 0,
            inpAddress: '',
            feedbackText: '',
            myClass: 'invalid'
        }
    },
    watch: {
        rangeVal(val){
            if(val > 20 && val < 60) {
                this.rangeVal = val < 40 ? 20 : 60;
            }
        },
        xPos(newVal, oldVal) {
            this.xDiff = newVal - oldVal
        },
        inpAddress(newVal, oldVal) {
            if(!newVal.includes('@')){
              this.feedbackText = 'The e-mail address is NOT valid';
              this.myClass = 'invalid';
            }
            else if(!oldVal.includes('@') && newVal.includes('@')) {
              this.feedbackText = 'Perfect! You fixed it!';
              this.myClass = 'valid'
            }
            else {
              this.feedbackText = 'The e-mail address is valid :)';
            }
        }
    },
    computed: {
        isImportant() {
            return this.chbxVal ? 'yes' : 'no';
        }
    },
    methods: {
        updatePos(evt) {
            this.xPos = evt.offsetX
        }
    }
});

app.mount('#app');