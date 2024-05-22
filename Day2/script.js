const app = Vue.createApp({
  data() {
    return {
      yourName: "Hoàng Mạnh Tuấn",
      yourAge: 20,
      someImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMX_SH5Jh4HZ2GfCCpwzXYuHrd5x4p-5xFlwjMc1Muhg&s",
    };
  },
  methods: {
    randomNumber() {
        return Math.random().toFixed(2);
    },
    yourAgeAfterFiveYears() {
        return this.yourAge + 5;
    },
  },
});


app.mount("#assignment");