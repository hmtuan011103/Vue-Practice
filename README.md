# VUE - PRACTICE

# --------------------------------
# ------- PROPS -------
DEFINE
Props is configuration option in Vue.
Props là một tùy chọn cấu hình trong Vue.

With props, We can pass data to the components via custom attributes to the component tag.
Với props, Chúng ta có thể truyền data đến các components thông qua các thuộc tính tùy chỉnh cho component tag.

PASS DATA TO A COMPONENT
Props attributes are written with a dash - to separate words (kebab-case) in the <template> tag, 
Props attributes (Đạo cụ) được viết bằng dấu gạch ngang để phân tách các từ (kebab-case) trong <tempalte></tempalte> tag

RECEIVE DATA IN SIDE A COMPONENT
But kebab-case is not legal in JavaScript. So instead we need to write the attribute names as camelCase in JavaScript, and Vue understands this automatically!
Nhưng kebeb-case không đúng trong JavaScript. Vì vậy, thay vào đó chúng ta cần viết tên thuộc tính là camcelCase trong JavaScript, và Vue tự động hiểu.

BOOLEAN PROPS
We can achieve different functionality by passing props of different data types.
Chúng ta có thể đạt được các chức năng khác nhau bằng cách chuyển các props của các loại dữ liệu khác nhau

And we are able to define rules for how attributes are given when components are created from App.vue
Và chúng ta có thể định nghĩa các quy tắc về cách cung cấp các thuộc tính khi các components được tạo từ App.vue

To pass props with a data type different to String, we must write v-bind: in front of the attribute we want to pass
Để truyền props với kiểu dữ liệu khác string, chúng ta phải sử dụng v-bind: đằng trước thuộc tính chúng ta muốn truyền

PROPS INTERFACE

PROPS AS AN OBJECT
<!-- => props: {
    foodName: String,
    fooodDesc: String,
    isFavorite: Boolean
}, -->
With props defined in this way, other people can look inside FoodItem.vue and easily see what the component expects
Với cách định nghĩa props trên, thì người dùng khác có thể nhìn thấy bên trong file FoodItem.vue dữ liệu mong muốn của props

REQUIRED PROPS
To tell Vue that a prop is required we need to define the prop as an object. Let's make the prop 'foodName' required, like this:
<!-- props: {
    foodName: {
        type: String,
        required: true
    },
    foodDesc: String,
    isFavorite: Boolean
} -->

DEFAULT VALUE
We can set a default value for a prop
Let's create default value for the 'foodDesc' prop in the 'FoodItem' component, and then create such an item for rice without defining the 'foodDesc' prop
Khi định nghĩa giá trị cho một prop thì khi sử dụng component đó bên trong File cha nào đó thì không cần phải gọi nó ra
Chỉ gọi nó ra khi cần custome giá trị đó

PROPS VALIDATOR FUNCTION
We can also define a validator function that decides if the prop vvalue is valid or not.
Chúng ta có thể định nghĩa một hàm xác thực để quyết định xem giá trị prop có hợp lệ hay không

Such validator functions must return either true or false.
Các hàm xác thực như vật phải trả về đúng hoặc sai.

When the validator returns false, it means the prop value is invalid.
Khi trình xác nhận trả về false, điều đó có nghĩa là giá trị prop không hợp lệ.

An invalid prop value generates a warning in the browser console when we run our page in developer mode, and the warning is a useful hint to make sure the components are used as intended.
Giá trị prop không hợp lệ sẽ tạo ra cảnh báo trong console khi chúng ta chạy trang của mình ở chế độ của developer và cảnh báo là gợi ý hữu ích để đảm bảo các component được sử dụng như dự định.


MODIFY PROPS
When a component is created in the parent alement we are not allowed to chang the value of the prop recevied in the child element. 
So inside FoodItem.vue we cannot change the value of the 'isFavorite' prop we get from App.vue. The prop is read-only from the parent, which is App.vue in our case

Khi 1 component được tạo trong phần tử cha, chúng ta không được phép thay đổi giá trị của prop nhận được trong phần tử con.
Vì vậy bên trong FoodItem.Vue, chúng ta không thể thay đổi giá trị của prop 'isFavorite' mà chúng ta nhận được từ App.vue. Prop ở chế độ chỉ đọc từ parent, đó là App.vue trong trường hợp của chúng tôi

# --------------------------------



# --------------------------------
# ------- VUE - V-FOR - COMPONENTS -------

DEFINE
Components can be reused with v-for to generate many elements of the same kind
Components có thể được tái sử dụng với v-for để tạo ra nhiều element cùng loại

When generating elements with v-for from a component, it is also very helpful that props can be assigned dynamically based on values from an array.
Khi tạo các element bằng v-for từ 1 component, cũng rất hữu ích khi các props có thể được gán tự động dựa trên các giá trị từ một mảng

KEY - ATTRIBUTE
Khi dùng v-for để lặp các phần tử, Vue tái sử dụng các phần tử DOM để tối ưu hóa hiệu suất
Nếu mảng dữ liệu thay đổi, Vue có thể tái sử dụng các phần tử không đúng cách nếu không có thuộc tính 'key'
Key giúp Vue phân biệt các phần tử một cách chính xác bằng cách cung cấp một định danh duy nhất
# --------------------------------



# --------------------------------
# ------- VUE - $emit() - method -------

DEFINE
With built-in $emit() method in Vue we can create a custom event in the child component that can be captured in the parent element
Với phương thức $emit() tich hợp trong Vue, chúng ta có thể tạo 1 event tùy chỉnh trong các component con có thể được ghi lại trong component cha

Props are used to send data from the parent element to be child component, and $emit() is used to do the oposite: to pass information from the child component to the parent.
Props được sử dụng để gửi dữ liệu từ phần tử cha đến component con và $emit() được sử dụng để thực hiện điều ngược lại: Truyền thông tin từ component con đến component cha.

EMIT A CUSTOM EVENT
Cần gửi thông tin từ component cha và chúng tôi sử dụng $emit() để thực hiện điều đó

The EMITS OPTION
Tương tự như cách chúng ta khai báo props bên trong component con.
Chúng ta cũng có thể ghi lại ( ghi lại ở đây là có thể khai báo hoặc không ) các emits trong component bằng 'emits' option.
Việc ghi lại làm rõ ràng code hơn.

# --------------------------------


# --------------------------------
# ------- VUE FALLTHROUGH ATTRIBUTES -------
Khi bạn định nghĩa một component, bạn có thể truyền các thuộc tính không được định nghĩa rõ ràng trong props của component con.
Những thuộc tính này được gọi là "fallthrough attributes" và sẽ tự động được truyền từ component cha xuống các phần tử gốc trong template của component con.


Typical attributes được sử dụng để fall through are class, style and v-on (@)

# --------------------------------

# --------------------------------
# ------- SCOPED STYLING -------

DEFINE
Sử dụng scoped trong tag <style scroped></style>

# --------------------------------

# --------------------------------
# ------- LOCAL COMPONENTS -------

DEFINE
Components can be made to be local, meaning that they are only accessiable inside a specific *.vue file
Nghĩa là các component có thể được biến thành biến cục bộ, nghĩa là chúng chỉ có thể truy cập được bên trong một file *.vue cụ thể

GLOBAL COMPONENTS
Cách chúng ta đưa các component vào trong main.js, điều này giúp chúng ta có thể truy cập được bên trong <template></template> của tất cả cá tệp *.vue khác trong dự án đó.


LOCAL COMPONENTS
Chúng ta có thể đưa trực tiếp 1 component vào tag <script></script> thay vì đưa nó vào trong main.js
Kiểu trong component cần sử dụng 1 component khác thì ta có thể viết
<!-- <script>
    import CompOne from './components/ComOne.vue'

    export default {
        components: {
            'comp-one': CompOne
        }
    }
</script> -->

export default không yêu cầu sử dụng dấu ngoặc nhọn khi import và có thể đặt tên bất kì
export yêu cầu sử dụng dấu ngoặc nhọn và phải đúng tên hoặc tên được đổi.

# --------------------------------



# --------------------------------
# ------- VUE SLOTS -------

DEFINE
Slots là 1 tính năng mạnh mẽ trong Vue cho phép các component linh hoạt hơn và có thể tái sử dụng hơn.
=> Chúng ta sử dụng slots trong Vue để send content từ parent component vào <template></template> của child component
<!-- <template>
  <slot-comp>Hello World!</slot-comp>
</template> -->
<!-- Code trên trong parent component -->

=> Để nhận được Hello World bên trong component và hiển thị nó trong trang của chúng ta
=> Chúng ta cần sử dụng <slot></slot> bên trong component
=> Slot đóng vai trò giữ chỗ cho nội dung, do đó sau khi ứng dụng được xây dựng, slot sẽ được thay thế bằng nội dung được gửi tới nó

<!-- <template>
  <div>  
    <p>SlotComp.vue</p>
    <slot></slot> Nội dung component từ cha sẽ hiển thị ở đây
  </div>
</template> -->
<!-- Code trên trong child component -->


SLOTS AS CARDS
Slot cũng có thể được sử dụng để bao quanh các khối nội dung html động lớn hơn để có giao diện giống như card
<!-- <template>
  <h3>Slots in Vue</h3>  
  <p>We create card-like div boxes from the foods array.</p>
  <div id="wrapper">
    <slot-comp v-for="x in foods">
      <img v-bind:src="x.url">
      <h4>{{x.name}}</h4>
      <p>{{x.desc}}</p>
    </slot-comp>
  </div>
</template> -->
<!-- Code trên trong parent component -->


<!-- <template>
  <div> 
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped>
  div {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    margin: 10px;
  }
</style> -->
<!-- Code trên trong child component -->

FALLBACK CONTENT (Nội dung dự phòng)
Nếu 1 component được tạo mà không có nội dung, chúng ta có thể có fallback content trong <slot></slot>
Kiểu như là vẫn là thẻ slot ở bên trong component con, nhưng lần này thẻ slot không giống mà là có giá trị
Nếu gọi sử dụng child component bên trong parent component mà chỉ ghi mỗi tên component đó ra thôi
Thì nó sẽ lấy nội dung trong thẻ slot của component con
Ngược lại nếu ghi nội dung trong lần gọi compoent con ở component cha thì nội dung bên trong component con mặc dịnh sẽ bị thay thế

# --------------------------------



# --------------------------------
# ------- VUE V-SLOT -------

DEFINE
Chúng ta cần v-slot directive để tham chiếu đến named slots ( Kiểu slot đã được đặt tên )
Named slots cho phép kiểm soát nhiều hơn vị trí đặt nội dung trong mẫu của component con
Linh hoạt hơn và có thể tái sử dụng
Nếu chỉ sử dụng slots mà không dùng v-slot với Named slot thì bên compoent con có bao nhiêu slot thì nó sẽ chỉ nhận 1 giá trị

V-SLOTS AND NAMED SLOTS ( Sử dụng với nhiều slot trong 1 component )
Nếu chúng ta có nhiều hơn 1 slot trong 1 component, nhưng muốn kiểm soát nội dung sẽ xuất hiện ở slot nào
Chúng ta cần đặt tên cho các vị trí đó và sử dụng v-slot để gửi nội dung đến đúng nơi

<!-- <h3>Component</h3>
<div>
  <slot name="topSlot"></slot>
</div>
<div>
  <slot name="bottomSlot"></slot>
</div> -->
<!-- Code trên trong child component -->


<!-- <h1>App.vue</h1>
<p>The component has two div tags with one slot in each.</p>
<slot-comp v-slot:bottomSlot>'Hello!'</slot-comp> -->
<!-- Code trên trong parent component -->

DEFAULT SLOTS
Nếu bạn có 1 slot không có name thì slot đó sẽ dược mặc định cho các component được đánh dấu là v-slot:default hoặc không được đánh gấu bằng v-slot
=> Kiểu như là nếu bên component con có 1 slot không được đặt tên thì khi gọi nó sang compoent cha.
Thì nội dung trong thẻ component con không định nghĩa tên hoặc có v-slot:default sẽ mặc định cho cái thằng Slot không có tên bên component con.


V-SLOT IN <TEMPLATE>
v-slot cũng có thể được sử dụng trong thẻ template để hướng các content lớn hơn đến một slot nhất định
<!-- <h1>App.vue</h1>
<p>The component has two div tags with one slot in each.</p>
<slot-comp>
  <template v-slot:bottomSlot>
    <h4>To the bottom slot!</h4>
    <p>This p tag and the h4 tag above are directed to the bottom slot with the v-slot directive used on the template tag.</p>
  </template>
  <p>This goes into the default slot</p>
</slot-comp> -->
<!-- Code trên trong parent component -->

<!-- <h3>Component</h3>
<div>
  <slot></slot>
</div>
<div>
  <slot name="bottomSlot"></slot>
</div> -->
<!-- Code trên trong child component -->
=> Chúng ta sử dụng thẻ template để hướng một số nội dung đến 1 slot nhất định vì thẻ template không được hiển thị, nó chỉ giữ chố cho nội dung

V-SLOT SHORTHAND #
Viết tắt của v-slot là #
<!-- <slot-comp v-slot:topSlot>'Hello!'</slot-comp> -->
Can be written as:
<!-- <slot-comp #topSlot>'Hello!'</slot-comp> -->


# --------------------------------


# --------------------------------
# ------- SCOPED SLOTS -------

DEFINE 
Scoped slot cung cấp dữ liệu cục bộ từ component con để component cha có thể chọn cách hiển thị dữ liệu đó

SEND DATA TO PARENT
Chúng ta sử dụng v-bind trong slot child component để gửi dữ liệu cục bộ đến component cha

VD: 
<!-- <template>
  <slot v-bind:lclData="data"></slot>
</template>

<script>
  export default {
    data() {
      return {
        data: 'This is local data'
      }
    }
  }
</script> -->

RECEIVE DATA FROM SCOPED SLOT
Dữ liệu cục bộ trong component con được gửi với v-bind, và nó có thể được nhận trong component cha với v-slot (#)
VD:
<!-- <slot-comp v-slot:"dataFromSlot">
  <h2>{{ dataFromSlot.lclData }}</h2>
</slot-comp> -->

SCOPED SLOT WITH AN ARRAY
Có thể gửi dữ liệu từ 1 array bằng cách dùng v-for, nhưng code trong App.vue về cơ bản là giống nhau

<!-- <template>
  <slot
    v-for="x in foods"
    :key="x"
    :foodName="x"
  ></slot>
</template>

<script>
  export default {
    data() {
      return {
        foods: ['Apple','Pizza','Rice','Fish','Cake']
      }
    }
  }
</script> -->
<!-- Code trên trong child component -->

<!-- <slot-comp v-slot="food">
  <h2>{{ food.foodName }}</h2>
</slot-comp> -->
<!-- Code trên trong parent component -->

STATIC DATA FROM A SCOPED SLOT
1 slot scoped cũng có thể gửi static data, Đó là dữ liệu không thuộc data property của Vue instance
Khi gửi statix data, chúng ta không sử dụng v-bind
Trong ví dụ bên dưới, chúng ta gửi 1 static text, và 1 text bound dymaically từ data instance.

<!-- <template>
  <slot
    staticText="This text is static"
    :dynamicText="text"
  ></slot>
</template>

<script>
  export default {
    data() {
      return {
        text: 'This text is from the data property'
      }
    }
  }
</script> -->
<!-- Code trên trong child component -->

<!-- <slot-comp v-slot="texts"> => Cái texts ở đây là do mình tùy chọn đặt tên.
  <h2>{{ texts.staticText }}</h2>
  <p>{{ texts.dynamicText }}</p>
</slot-comp> -->
<!-- Code trên trong parent component -->

NAMED SCOPED SLOTS
Tương tự như name bên v-slot
Alternatively, we can create the component one time, with two different "template" tags, each "template" tag referring to a different slot.

# --------------------------------


# --------------------------------
# ------- SCOPED SLOTS -------

DYNAMIC COMPONENTS
Có thể được sử dụng để lướt qua các trang trong trang của bạn, như các tab trong trình duyệt của bạn, bằng cách sử dụng 'is' attribute

THE COMPONENT TAG AND THE 'IS' ATTRIBUTE
Để tạo 1 dynamic component chúng ta sử dụng <component></component> để thể hiện active component.
'is' Attribute được gắn với một giá trị bằng v-bind, và chúng ta thay đổi giá trị đó thành tên của component mà chúng ta muốn active

<!-- <component :is="activeComp"></component> -->

Thuộc tính is còn có thể được sử dụng trong các thẻ để thay thế nội dung của thẻ đó bằng 1 component khác mà không cần v-bind hay shorthand của nó là (:)
<!-- <img is="vue:child-comp" /> --> 
child-comp là component thay thế nội dung thẻ img


<KeepAlive>
Nếu có bất kì thao tác nào ở các component khi ta chuyển đổi lại giữa các component nó sẽ bị reset lại ban đầu
Để giữ nguyên state (trạng thái), các thông tin đầu vào trước đó, khi bạn quay lại 1 component
Chúng ta sử dụng thẻ <KeepAlive></KeepAlive> xung quanh thẻ <component></component>

THE 'INCLUDE' AND 'EXCLUDE' attributes
Tất cả component bên trong <KeepAlive></KeepAlive> sẽ được giữ nguyên theo mặc định.
Nhưng chúng ta cũng có thể xác định chỉ một số component được duy trì bằng cách sử dụng 'include' hoặc 'exclude' trên <KeepAlive></KeepAlive>
Nếu sử dụng include hoặc exclude trên thẻ KeepAlive, chúng ta cũng cần đặt tên cho các thành phần bằng 'name' option trong component con
 <!-- <KeepAlive exclude="CompOne, CompTwo"> CompOne là option name được export default bên Component con CompOne
    <component :is="activeComp"></component>
  </KeepAlive> -->

THE 'MAX' ATTRIBUTE
Chúng ta sử dụng 'max' như một thuộc tính trong KeepAlive để giới hạn số lượng component mà trình duyệt cần nhớ trạng thái (state)
<!-- <KeepAlive :max="2"> -->
Ví dụ chúng ta chuyển đổi quá 2 component là nó sẽ quên state, nếu chúng ta chỉ chuyển qua lại 2 component trong 2 component thì nó vẫn giữ state

# --------------------------------


# --------------------------------
# ------- VUE TELEPORT -------
DEFINE
Thẻ Teleport được sử dụng để di chuyển content sang vị trí khác trong cấu trúc DOM

<TELEPORT> AND THE 'TO' ATTRIBUTE
Chuyển 1 vài conntent đến các vị trí khác trong cấu truc DOM
Chúng ta sử dụng tag Teleport xung quanh content và thuộc tính 'to' để xác định vị trí di chuyển nó
VD
<Teleport to="body">
  <p></p>
</Teleport>

SCRIPT AND STYLE Ò TELEPORTED ELEMENTS

Mặc dù một số nội dung được di chuyển ra khỏi component bằng thẻ Teleport.
Nhưng mã có liên quan bên trong thành phần đó trong thẻ script và style vẫn hoạt động đối với nội dung được di chuyển.
Cho dù bạn có dùng scoped ở trong component đó.

# --------------------------------


# --------------------------------
# ------- VUE HTTP REQUESTS -------

DEFINE
HTTP request là một phần giao tiếp giữa client và server
Client gửi 1 HTTP request đến server, server sẽ xử lý và trả về 1 HTTP response

THE FETCH METHOD
Để lấy data từ server trong Vue chúng ta có thể dùng Javascript Fetch() method.
Khi sử dụng fecth mà chúng ta không chỉ định bất kì một HTTP request method nào thì mặc định nó sẽ là GET.
Fetch() nhận một URL address là một đối số để nó biết lấy data từ đâu.

Một ví dụ cơ bản sử dụng Fetch method()
<!-- <template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="data">{{ data }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("file.txt");
      this.data = await response.text(); // Lấy data text từ file txt
    }
  }
};
</script> -->

Json() method đọc một response từ HTTP request và trả về một JavaScript Object
<!-- async fetchData() {
  const response = await fetch("bigLandMammals.json");
  this.data = await response.json();
} -->

DATA FROM API
HTTP REQUEST IN VUE WITH THE 'AXIOS' LIBRARY
Là một thư viện của JavaScript cho phép chúng ta thực hiện các yêu cầu HTTP
Tạo và Chạy nó trong dự án của chúng ta thì dùng: npm install axios

Ví dụ:
<!-- methods: {
  async fetchData() {      
    this.data = await axios.get("https://random-data-api.com/api/v2/users");
  }
} -->

# --------------------------------


# --------------------------------
# ------- VUE TEMPLATE REFS -------

DEFINE
Được sử dụng để chỉ các phần tử DOM cụ thể
Khi ref attribute được đặt vào 1 thẻ HTML, phần tử DOM thu được sẽ được thêm vào $refs object
Chúng ta có thể sử dụng ref attribute và $ref object trong Vue để thay thế cho getElementById() hoặc querySelector()

THE 'REF' ATTRIBUTE AND THE '$REFS' OBJECT
Thẻ html với ref attribute sẽ được thêm vào $refs object và có thể được tìm kiếm sau đó trong thẻ script

Ví dụ trực quan
<!-- <template>
  <h1>Example</h1>
  <p>Click the button to put "Hello!" as the text in the green p element.</p>
  <button @click="changeVal">Change Text</button>
  <p ref="pEl">This is the initial text</p>
</template>

<script>
  export default {
    methods: {
      changeVal() {
        this.$refs.pEl.innerHTML = "Hello!"; // Truy cập đối tượng pEl trong $refs object
      }
    }
  }
</script> -->

GET THE INPUT VALUE FROM '$refs'

Chúng ta có thể đi sâu hơn vào phần từ HTML được thêm vào $refs object để truy cập bất kỳ thuộc tính nào mà chúng ta muốn
Ví dụ bên dưới
<!-- <template>
  <h1>Example</h1>
  <p>Start writing inside the input element, and the text will be copied into the last paragraph by the use of the '$refs' object.</p>
  <input ref="inputEl" @input="getRefs" placeholder="Write something..">
  <p ref="pEl"></p>
</template>

<script>
  export default {
    methods: {
      getRefs() { 
        this.$refs.pEl.innerHTML = this.$refs.inputEl.value;
      }
    }
  };
</script> -->

'REF' WITH V-FOR
Với các thẻ HTML được tạo từ v-for, với ref attribute sẽ được thêm vào $refs object như một array
Ví dụ bên dưới
<!-- <template>
  <h1>Example</h1>
  <p>Click the button to reveal the 3rd list element stored as an array element in the $refs object.</p>
  <button @click="getValue">Get the 3rd list element</button><br>
  <ul>
    <li v-for="x in liTexts" ref="liEl">{{ x }}</li>
  </ul>
  <pre>{{ thirdEl }}</pre>
</template>

<script>
  export default {
    data() {
      return {
        thirdEl: ' ',
        liTexts: ['Apple','Banana','Kiwi','Tomato','Lichi']
      }
    },
    methods: {
      getValue() { 
        this.thirdEl = this.$refs.liEl[2].innerHTML;
        console.log("this.$refs.liEl = ",this.$refs.liEl);
      }
    }
  };
</script> -->

# --------------------------------


# --------------------------------
# ------- VUE Lifecycle Hooks -------

DEFINE
Là các giai đoạn nhất định trong vòng đời của 1 component nơi chúng ta có thể thêm code để thực hiện mọi việc

LIFECYCLE HOOKS
Mỗi khi 1 component đạt đến một giai đoạn (stage) mới trong vòng đời của nó, 1 function cụ thể sẽ chạy
Và chúng ta cso thể thêm code vào function đó
Những function như vậy được gọi là LIFECYCLE HOOKS, vì chúng ta có thể "nối" mã của mình vào giai đoạn (stage) đó.

Đây là tất cả các lifecycle hook mà 1 component có:

- 1. beforeCreate
- 2. created
- 3. beforeMount
- 4. mounted
- 5. beforeUpdate
- 6. updated
- 7. beforeUnmount
- 8. unmounted
- 9. errorCaptured
- 10. renderTracked
- 11. renderTriggered
- 12. activated
- 13. deactivated
- 14. serverPrefetch 

1. THE 'beforeCreate' HOOK
  => Xảy ra trước khi component được khởi tạo.
  => Vì vậy đây là trước khi Vue set up the component's data, computed properties, methods, and event listeners.
  => Có thể được sử dụng để thiết lập global event listner
  => Nhưng chúng ta nên TRÁNH cố gắng truy cập các elements thuộc về component LifeCycle Hook beforeCreate
  => Chẳng hạn như data, watcher and methods, bởi vì chúng chưa được tạo tại stage này.
  => Ngoài ra sẽ không có ý nghĩa gì khi cố gắng truy cập elements DOM từ beforeCreate lifecycle hook.
  => Vì chúng không được tạo cho đến khi component được mounted.

  Ví dụ bên dưới:
  <!-- <template>
    <h2>Component</h2>
    <p>This is the component</p>
    <p id="pResult">{{ text }}</p>
  </template>

  <script>
  export default {
    data() {
      return {
        text: '...'
      }
    },
    beforeCreate() {
      this.text = 'initial text'; // This line has no effect
      console.log("beforeCreate: The component is not created yet.");
    }
  }
  </script> -->

  <!-- <template>
    <h1>The 'beforeCreate' Lifecycle Hook</h1>
    <p>
      We can see the console.log() message from 'beforeCreate' lifecycle hook,
      but there is no effect from the text change we try to do to the Vue data property, because the Vue data property is not created yet.
    </p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
      <comp-one v-if="activeComp"></comp-one>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        activeComp: false
      }
    }
  }
  </script> -->

2. THE 'created' HOOK
  => Xảy ra sau khi component được khởi tạo.
  => Vì vậy Vue đã set up the component data, computed properties, methods, and event listener
  => Chúng ta nên TRÁNH cố gắng truy cập các phần tử DOM từ created hook
  => Vì các phần tử DOM không thể truy cập được cho đến khi component đó được mounted
  => Created hook có thể được sử dụng để fetch data with HTTP requests
  => Hoặc thiết lập các giá trị dữ liệu ban đầu
  => Ví dụ bên dưới là việc sử dụng created hook để thực hiện việc data property TEXT được cấp 1 giá trị ban đầu

  <!-- <template>
    <h2>Component</h2>
    <p>This is the component</p>
    <p id="pResult">{{ text }}</p>
  </template>

  <script>
  export default {
    data() {
      return {
        text: '...'
      }
    },
    created() {
      this.text = 'initial text';
      console.log("created: The component just got created.");
    }
  }
  </script> -->

  <!-- <template>
    <h1>The 'created' Lifecycle Hook</h1>
    <p>We can see the console.log() message from 'created' lifecycle hook, and the text change we try to do to the Vue data property works, because the Vue data property is already created at this stage.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
      <comp-one v-if="activeComp"></comp-one>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          activeComp: false
        }
      }
    }
  </script> -->

3. THE 'beforeMount' HOOK
  => Xảy ra ngay trước khi component is mounted, tức là ngay trước khi thành phần đó được thêm vào DOM
  => Chúng ta nên TRÁNH cố gắng truy cập các phần tử DOM từ beforeMount hook
  => Vì các phần tử DOM không thể truy cập được cho đến khi component đó được mounted
  => Ví dụ thì ở đây cũng tương tự như các hook ở trên.

4. THE 'mounted' HOOK
  => Ngay sau khi 1 component được thêm vào DOM, mount() method sẽ được gọi và chúng ta có thể thêm mã của mình vào stage (giai đoạn) đó.
  => Đây là cơ hội lần đầu tiên chúng ta phải làm những việc liên quan đến elements DOM thuộc về component
  => Kiểu ngay sau khi mount và render DOM ra thì nó thực hiện việc trong mounted hook luôn 
  => Điều này nó thể dẫn đến DOM chưa tải ra và thực hiện luôn hành động trong mounted hook

  Ví dụ cơ bản nhất cho việc dùng mounted hook
  <!-- <template>
    <h2>Form Component</h2>
    <p>When this component is added to the DOM tree, the mounted() function is called, and we put the cursor inside the input element.</p>
    <form @submit.prevent>
      <label>
        <p>
          Name: <br>
          <input type="text" ref="inpName">
        </p>
      </label>
      <label>
        <p>
          Age: <br>
          <input type="number">
        </p>
      </label>
      <button>Submit</button>
    </form>
    <p>(This form does not work, it is only here to show the mounted lifecycle hook.)</p>
  </template>

  <script>
    export default {
      mounted() {
        this.$refs.inpName.focus();
      }
    }
  </script> -->

5. THE 'beforeUpdate' HOOK
  => Được gọi bất cứ khi nào có thay đổi về data của component
  => Nhưng trước khi việc cập nhật được hiển thị trên màn hình. 
  => Việc beforeUpdate hook luôn xảy ra trước update hook.
  => Điều đặc biệt ở beforeUpdate là chúng ta có thể thực hiện các thay đổi với ứng dụng
  => Mà không cần kích hoạt bản cập nhật mới, vì vậy chúng ta tránh được vòng lặp vô hạn.
  => Đó là lý do không thực hiện các thay đổi đối với ứng dụng trong updated hook
  => Vì với hook đó, một vòng lặp vô hạn sẽ được tạo ra.

  Ví dụ:
  <!-- <template>
    <h1>The 'beforeUpdate' Lifecycle Hook</h1>
    <p>Whenever there is a change in our page, the application is 'updated' and the 'beforeUpdate' hook happens just before that.</p>
    <p>It is safe to modify our page in the 'beforeUpdate' hook like we do here, but if we modify our page in the 'updated' hook, we will generate an infinite loop.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
      <comp-one v-if="activeComp"></comp-one>
    </div>
    <ol ref="divLog"></ol>
  </template>

  <script>
    export default {
      data() {
        return {
          activeComp: true
        }
      },
      beforeUpdate() {
        this.$refs.divLog.innerHTML += "<li>beforeUpdate: This happened just before the 'updated' hook.</li>";
      }
    }
  </script> -->

6. THE 'updated' HOOK
  => Được gọi sau khi component đã cập nhật DOM

  Ví dụ minh họa: 
  <!-- <template>
    <h1>The 'updated' Lifecycle Hook</h1>
    <p>Whenever there is a change in our page, the application is updated and the updated() function is called. In this example we use console.log() in the updated() function that runs when our application is updated.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
      <comp-one v-if="activeComp"></comp-one>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          activeComp: true
        }
      },
      updated() {
        console.log("The component is updated!");
      }
    }
  </script> -->

  => Chúng ta phải cẩn thận để không sửa đổi chính trang đó khi updated hook được gọi
  => Vì khi đó trang sẽ cập nhật lại, tạo ra một vòng lặp vô hạn

  Ví dụ minh họa:
  <!-- <template>
    <h1>The 'updated' Lifecycle Hook</h1>
    <p>Whenever there is a change in our page, the application is updated and the updated() function is called.</p>
    <p>The first change that causes the updated hook to be called is when we remove the component by clicking the button. When this happens, the update() function adds text to the last paragraph, which in turn updates the page again and again.</p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
      <comp-one v-if="activeComp"></comp-one>
    </div>
    <div>{{ text }}</div>
  </template>

  <script>
    export default {
      data() {
        return {
          activeComp: true,
          text: "Hello, "
        }
      },
      updated() {
        this.text += "hi, ";
      }
    }
  </script> -->

7. THE 'beforeUnmount' HOOK
  => Được gọi ngay trước khi 1 component bị xóa khỏi DOM

  Ví dụ minh họa bên dưới:
  <!-- <template>
    <h2>Component</h2>
    <p ref="pEl">Strawberries!</p>
  </template>
    
  <script>
  export default {
    beforeUnmount() {
      alert("beforeUnmount: The text inside the p-tag is: " + this.$refs.pEl.innerHTML);
    }
  }
  </script> -->

  <!-- <template>
    <h1>Lifecycle Hooks</h1>
    <button @click="this.activeComp = !this.activeComp">{{ btnText }}</button>
    <div>
      <comp-one v-if="activeComp"></comp-one>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          activeComp: true
        }
      },
      computed: {
        btnText() {
          if(this.activeComp) {
            return 'Remove component'
          }
          else {
            return 'Add component'
          }
        }
      }
    }
  </script> -->



8. THE 'unmounted' HOOK
  => Được gọi sau khi một component bị xóa khỏi DOM
  => Được sử dụng để remove event listeners hoặc cancel timers hoặc intervals.
  => Khi 1 component được ngắt kết nối, unmounted() sẽ được gọi và chúng ta có thể thêm mã của mình vào.
  => Về cơ bản là ví dụ của nó có thể giống beforeUnmounted hook
  => Kiểu ngay sau khi xóa DOM trong 1 component thì nó thực hiện việc trong unmounted hook luôn 
  => Điều này nó thể dẫn đến DOM chưa tải lại và thực hiện luôn hành động trong unmounted hook

9. THE 'errorCaptured' HOOK
  => Được gọi khi có lỗi xảy ra ở component con, component cháu.
  => Được sử dụng để xử lý lỗi, ghi lại log hoặc hiển thị lỗi cho người dùng
  => Thông tin về lỗi cũng có thể được ghi lại dưới dang đối số cho errorCaptured hook
  => Các đối số đó là: lỗi, thành phần gây ra lỗi, loại nguồn lỗi
  => Ví dụ lỗi cơ bản khi không có ref tồn tại


  <!-- <template>
    <h2>Component</h2>
    <p>This is the component</p>
    <button @click="generateError">Generate Error</button>
  </template>

  <script>
    export default {
      methods: {
        generateError() {
          this.$refs.objEl.innerHTML = "hi";
        }
      }
    }
  </script> -->

  <!-- <template>
    <h1>The 'errorCaptured' Lifecycle Hook</h1>
    <p>Whenever there is an error in a child component, the errorCaptured() function is called on the parent.</p>
    <p>When the button inside the component is clicked, a method will run that tries to do changes to a $refs object that does not exist. This creates an error in the component that triggers the 'errorCaptured' lifecycle hook in the parent, and an alert box is displayed with information about the error.</p>
    <p>After clicking "Ok" in the alert box you can see the error in the browser console.</p>
    <div>
      <comp-one></comp-one>
    </div>
  </template>

  <script>
    export default {
      errorCaptured(error,compInst,errorInfo) {
        console.log("error: ", error);
        console.log("compInst: ", compInst);
        console.log("errorInfo: ", errorInfo);
      }
    }
  </script> -->

10. THE 'renderTracked' HOOK --- 11. THE 'renderTriggered' HOOK

  ==> A reactive component là component có thể thay đổi
  ==> A render function là một hàm do Vue compiled (biên soạn) để theo dõi các reactive component.
  ===> Khi một reactive component thay đổi, render function sẽ được kích hoạt và hiển thị lại ứng dụng ra màn hình.

  => renderTracked hook chạy khi chức năng render được đặt để theo dõi (track), hoặc giám sát (monitor) một reactive component (thành phần phản ứng).
  => renderTracked hook thường chạy khi reactive component được khởi tạo.

  => renderTriggered hook chạy khi reactive component được theo dõi đó thay đổi và do đó kích hoạt một new render để mà hình được cập nhật những thay đổi mới nhất.

  => Cả hai hook trên được dùng để debugging, và chỉ khả dụng (available) ở chế độ phát triển.


12 .THE 'activated' HOOK --- 13. THE 'deactivated' HOOK
  => Chỉ dành cho khi 1 reactive component được lưu trong cached (bộ nhớ đệm) được thêm vào hoặc xóa, chứ không phải DOM.
  => KeepAlive được sử dụng trong ví dụ bên dưới để cache (lưu trữ) dynamic component.

  Ví dụ bên dưới:
  <!-- <template>
    <h2>Component</h2>
    <p>Below is a log with every time the 'activated', 'deactivated', 'mounted' or 'unmounted' hooks run.</p>
    <ol ref="olEl"></ol>
    <p>You can also see when these hooks run in the console.</p>
  </template>
    
  <script>
    export default {
      mounted() {
        this.logHook("mounted");
      },
      unmounted() {
        this.logHook("unmounted");
      },
      activated() {
        this.logHook("activated");
      },
      deactivated() {
        this.logHook("deactivated");
      },
      methods: {
        logHook(hookName) {
          console.log(hookName);
          const liEl = document.createElement("li");
          liEl.innerHTML = hookName;
          this.$refs.olEl.appendChild(liEl);
        }
      }
    }
  </script> -->

  <!-- <template>
    <h1>The 'activated' and 'deactivated' Lifecycle Hooks</h1>
    <p>In this example for the 'activated' and 'deactivated' hooks we also see when and if the 'mounted' and 'unmounted' hooks are run.</p>
    <button @click="this.activeComp = !this.activeComp">Include component</button>
    <div>
      <KeepAlive>
        <comp-one v-if="activeComp"></comp-one>
      </KeepAlive>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          activeComp: false
        }
      }
    }
  </script> -->

14. THE 'serverPrefetch' HOOK
  => Chỉ được gọi trong suốt quá trình server-side rendering (SSR).
  
# --------------------------------

# --------------------------------
# ------- VUE Provide/Inject -------

DEFINE
Provide/Inject in Vue được sử dụng để cung cấp dữ liệu từ 1 compoenent cho các component khác, đặc biệt trong các dự án lớn
Provide cung cấp dữ liệu cho các component khác.
Inject được sử dụng để lấy provied data (dữ liệu được cung cấp)
Provide/Inject là một cách chia sẻ data thay thế cho việc truyền dữ liệu bằng cách sử dụng props

Trong các dự án lớn, với các component trong các component, có thể khó sử dụng props để cung cấp dữ liệu từ App.vue cho 1 sub-component.
Vì nó yêu cầu phải xác định props trong mọi thành phần mà dữ liệu đi qua.

=> Nếu sử dụng provide/inject thay vì props, chúng ta chỉ cần xác định dữ liệu được cung cấp ở nơi nó được cung cấp 
và chúng ta chỉ cần xác định dữ liệu được chèn ở nơi nó được inject

Provide Data

Chúng ta sử dụng provide configuration option để cung cấp dữ liệu cho các component khác
VD: 
App.vue
<!-- <template>
  <h1>Food</h1>
  <div @click="this.activeComp = 'food-about'" class="divBtn">About</div>
  <div @click="this.activeComp = 'food-kinds'" class="divBtn">Kinds</div>
  <div id="divComp">
    <component :is="activeComp"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComp: 'food-about',
      foods: [
        { name: 'Pizza', imgUrl: '/img_pizza.svg' },
        { name: 'Apple', imgUrl: '/img_apple.svg' },
        { name: 'Cake', imgUrl: '/img_cake.svg' },
        { name: 'Fish', imgUrl: '/img_fish.svg' },
        { name: 'Rice', imgUrl: '/img_rice.svg' }
      ]
    }
  },
  provide() {
    return {
      foods: this.foods
    }
  }
}
</script> -->

In the code above, the 'foods' array is now provided so that it is available to be injected in other components in your project

Inject Data
=> Bây giờ mảng 'foods' được cung cấp bởi provide trong App.vue, chúng ta có thể đưa nó vào component FoodKinds.

Với mảng 'foods' được inject vào 'FoodKinds' component, chúng ta có thể sử dụng dữ liệu từ App.vue hiển thị loại foods khác trong component 'FoodKinds'

<!-- <template>
    <h2>Different Kinds of Food</h2>
    <p><mark>In this application, food data is provided in "App.vue", and injected in the "FoodKinds.vue" component so that it can be shown here:</mark></p>
    <div v-for="x in foods">
        <img :src="x.imgUrl">
        <p class="pName">{{ x.name }}</p>
    </div>
</template>

<script>
  export default {
    inject: ['foods']
  }
</script> -->

# --------------------------------


# --------------------------------
# ---------- VUE Routing ---------

DEFINE
Được sử dụng để điều hướng (navigate) trong ứng dụng Vue
Và nó xảy ra ở phía máy khách, mà không cần tải lại toàn bộ trang
Điều này mang lại trải nghiệm người dùng nhanh hơn.

Là một cách để điều hướng, giống như cách chúng ta sử dung dynamic components trước đó
Với routing chúng ta có thể sử dụng URL address để hướng bất kì ai đó đến một địa điểm cụ thể trong ứng dụng Vue của mình.


NAVIGATE USING A DYNAMIC COMPONENT

FROM DYNAMIC COMPONENT TO ROUTING
Chúng ta xây dựng SPAs (Single Page Applications) with Vue
=> Điều này có nghĩa là ứng dụng của chúng ta chỉ chứa 1 file *.html
=> Và có nghĩa là chúng ta không thể hướng con người đến file *.html khác để hiển thị nội dung khác trong page của chúng ta

INSTALL THE VUE ROUTER LIBRARY
npm install vue-router@4
Xong import { createRouter, createWebHistory } from 'vue-router'

File main.js
import AnimalCollection from './components/Route/AnimalCollection.vue'
import FoodItems from './components/Route/FoodItems.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/foods', component: FoodItems }
    ]
});

const app = createApp(App);
app.use(router);

File App.vue
<!-- <div>
  <p>Choose what part of this page you want to see:</p>
  <router-link to="/animals">Animals</router-link>
  <router-link to="/foods">Food</router-link><br>
  <router-view></router-view>
</div> -->

# --------------------------------


# --------------------------------
# ---------- Vue Form Inputs ---------

# --------------------------------


# --------------------------------
# ---------- Vue Animations ---------

DEFINE
Hỗ trợ có component Transition cung cấp sẵn các class

Với 1 element trong component Transition được thêm vào, chúng ta có thể sử dụng 3 class sau để tạo animate Transition
  - v-enter-from
  - v-enter-active
  - v-enter-to

Với 1 element được xóa trong component Transition, chúng ta có thể sử dụng 3 class sau:
  - v-leave-from
  - v-leave-active
  - v-leave-to

THE TRANSITION 'name' PROP
Trong trường hợp bạn có một số component Transition, nhưng bạn muốn ít nhất một trong các component Transition có animation khác nhau.
Bạn cần có tên khác cho các component Transition để phân biệt chúng

Chúng ta có thể chọn tên của Transition component with name prop.
Và điều đó cũng thay đổi tên của các class, để chúng ta có thể đặt các quy tắc hoạt ảnh CSS khác nhau cho component đó
VD: 
<!-- <Transition name="swirl"> -->
If the transition name prop value is set to 'swirl', the automatically available classes will now start with 'swirl-' instead of 'v-'
  - swirl-enter-from
  - swirl-enter-active
  - swirl-enter-to
  - swirl-leave-from
  - swirl-leave-active
  - swirl-leave-to


JAVASCRIPT TRANSITION HOOKS
Mỗi class transition như vừa đề cập đều tương ứng với 1 event mà chúng ta có thể nối vào để chạy 1 mã script

v-enter-from	   before-enter: Trước khi thêm
v-enter-active	 enter: Thêm
v-enter-to	     after-enter: Sau khi thêm
                 enter-cancelled: Hủy thêm
v-leave-from	   before-leave: Trước khi xóa
v-leave-active	 leave: Xóa
v-leave-to	     after-leave: Sau khi xóa
                 leave-cancelled (v-show only): Hủy xóa (chỉ hoạt động với v-show)

Ví dụ:
<!-- <template>
  <h1>JavaScript Transition Hooks</h1>
  <p>This code hooks into "after-enter" so that after the initial animation is done, a method runs that displays a red div.</p>
  <button @click="pVisible=true">Create p-tag!</button><br>
  <Transition @after-enter="onAfterEnter">
    <p v-show="pVisible" id="p1">Hello World!</p>
  </Transition>
  <br>
  <div v-show="divVisible">This appears after the "enter-active" phase of the transition.</div>
</template>

<script>
  export default {
    data() {
      return {
        pVisible: false,
        divVisible: false
      }
    },
    methods: {
      onAfterEnter() {
        this.divVisible = true;
      }
    }
  }
</script>

<style scoped>
  .v-enter-active {
    animation: swirlAdded 1s;
  }
  @keyframes swirlAdded {
    from {
      opacity: 0;
      rotate: 0;
      scale: 0.1;
    }
    to {
      opacity: 1;
      rotate: 360deg;
      scale: 1;
    }
  }
  #p1, div {
    display: inline-block;
    padding: 10px;
    border: dashed black 1px;
  }
  #p1 {
    background-color: lightgreen;
  }
  div {
    background-color: lightcoral;
  }
</style> -->

THE 'appear' PROP
Nếu bạn có 1 element, bạn muốn animate khi page loads, chúng ta cần sử dụng appear prop trên Transition component
<!-- <Transition appear>
  ...
</Transition> -->

In this example, the appear prop starts an animation when the page load for the first time

TRANSITION BETWEEN ELEMENTS
Transition component cũng có thể dược sử dụng để chuyển đổi giữa một số phần tử.
Miễn là chúng ta đảm bảo rằng mỗi lần chỉ có 1 phần tử được hiển thị bằng cách sử dụng v-if, v-else-if
Ví dụ:
<!-- <template>
  <h1>Transition Between Elements</h1>
  <p>Click the button to get a new image.</p>
  <p>The new image is added before the previous is removed. We will fix this in the next example with mode="out-in".</p>
  <button @click="newImg">Next image</button><br>
  <Transition>
    <img src="/img_pizza.svg" v-if="imgActive === 'pizza'">
    <img src="/img_apple.svg" v-else-if="imgActive === 'apple'">
    <img src="/img_cake.svg" v-else-if="imgActive === 'cake'">
    <img src="/img_fish.svg" v-else-if="imgActive === 'fish'">
    <img src="/img_rice.svg" v-else-if="imgActive === 'rice'">
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      imgActive: 'pizza',
      imgs: ['pizza', 'apple', 'cake', 'fish', 'rice'],
      indexNbr: 0
    }
  },
  methods: {
    newImg() {
      this.indexNbr++;
      if(this.indexNbr >= this.imgs.length) {
        this.indexNbr = 0;
      }
      this.imgActive = this.imgs[this.indexNbr];
    }
  }
}
</script>

<style>
  .v-enter-active {
    animation: swirlAdded 1s;
  }
  .v-leave-active {
    animation: swirlAdded 1s reverse;
  }
  @keyframes swirlAdded {
    from {
      opacity: 0;
      rotate: 0;
      scale: 0.1;
    }
    to {
      opacity: 1;
      rotate: 360deg;
      scale: 1;
    }
  }
  img {
    width: 100px;
    margin: 20px;
  }
  img:hover {
    cursor: pointer;
  }
</style> -->

mode="out-in"
Chúng ta sử dụng mode="out-in" trên component Transition để việc loại bỏ một phần tử được hoàn tất trước khi phần tử tiếp theo được thêm vào.
Ví dụ:
<!-- <template>
  <h1>mode="out-in"</h1>
  <p>Click the button to get a new image.</p>
  <p>With mode="out-in", the next image is not added until the current image is removed. Another difference from the previous example, is that here we use computed prop instead of a method.</p>
  <button @click="indexNbr++">Next image</button><br>
  <Transition mode="out-in">
    <img src="/img_pizza.svg" v-if="imgActive === 'pizza'">
    <img src="/img_apple.svg" v-else-if="imgActive === 'apple'">
    <img src="/img_cake.svg" v-else-if="imgActive === 'cake'">
    <img src="/img_fish.svg" v-else-if="imgActive === 'fish'">
    <img src="/img_rice.svg" v-else-if="imgActive === 'rice'">
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      imgs: ['pizza', 'apple', 'cake', 'fish', 'rice'],
      indexNbr: 0
    }
  },
  computed: {
    imgActive() {
      if(this.indexNbr >= this.imgs.length) {
        this.indexNbr = 0;
      }
      return this.imgs[this.indexNbr];
    }
  }
}
</script>

<style>
  .v-enter-active {
    animation: swirlAdded 0.7s;
  }
  .v-leave-active {
    animation: swirlAdded 0.7s reverse;
  }
  @keyframes swirlAdded {
    from {
      opacity: 0;
      rotate: 0;
      scale: 0.1;
    }
    to {
      opacity: 1;
      rotate: 360deg;
      scale: 1;
    }
  }
  img {
    width: 100px;
    margin: 20px;
  }
  img:hover {
    cursor: pointer;
  }
</style> -->

TRANSITION WITH DYNAMIC COMPONENTS

Chúng ta có thể sử dụng Transition component to animate switching between dynamic components:
Ví dụ bên dưới:
<!-- <template>
  <h1>Transition with Dynamic Components</h1>
  <p>The Transition component wraps around the dynamic component so that the switching can be animated.</p>
  <button @click="toggleValue = !toggleValue">Switch component</button>
  <Transition mode="out-in">
    <component :is="activeComp"></component>
  </Transition>
</template>

<script>
  export default {
    data () {
      return {
        toggleValue: true
      }
    },
    computed: {
      activeComp() {
        if(this.toggleValue) {
          return 'comp-one'
        }
        else {
          return 'comp-two'
        }
      }
    }
  }
</script>

<style>
  .v-enter-active {
    animation: slideIn 0.5s;
  }
  @keyframes slideIn {
    from {
      translate: -200px 0;
      opacity: 0;
    }
    to {
      translate: 0 0;
      opacity: 1;
    }
  }
  .v-leave-active {
    animation: slideOut 0.5s;
  }
  @keyframes slideOut {
    from {
      translate: 0 0;
      opacity: 1;
    }
    to {
      translate: 200px 0;
      opacity: 0;
    }
  }
  #app {
    width: 350px;
    margin: 10px;
  }
  #app > div {
    border: solid black 2px;
    padding: 10px;
    margin-top: 10px;
  }
</style> -->

# --------------------------------


# --------------------------------
# ------- Vue Animations With v-for ------

DEFINE

<TransitionGroup></TransitionGroup> component được sử dụng để animate cho nhiều phần tử được thêm vào page của chúng ta với v-for
<TransitionGroup></TransitionGroup> component được sử dụng xunh quanh các element được tạo bằng v-for
Để cung cấp cho các phần từ này các hình ảnh động riêng lẻ khi chúng được thêm hoặc xóa
Tags được tạo bằng v-for bên trong <TransitionGroup></TransitionGroup> component phải được xác định là key attribute.
The <TransitionGroup></TransitionGroup> component chỉ được hiển thị dưới dạng thẻ HTML
Nếu chúng tôi xác định nó là một thẻ cụ thể bằng cách dùng tag prop

Ví dụ:
<!-- <TransitionGroup tag="ol">
  <li v-for="x in products" :key="x">
    {{ x }}
  </li>
</TransitionGroup> -->

Kết quả:
<!-- <ol>
  <li>Apple</li>
  <li>Pizza</li>
  <li>Rice</li>
</ol> -->

Sau đó chúng ta có thể thêm css vào các class có sẵn được tạo với TransitionGroup kiểu như v-enter-to, v-enter-from.


Một ví dụ đơn giản cho dễ hiểu:
<!-- <template>
  <h3>The &lt;TransitionGroup&gt; Component</h3>
  <p>New products are given animations using the &lt;TransitionGroup&gt; component.</p>
  <input type="text" v-model="inpName"> 
  <button @click="addEl">Add</button>
  <TransitionGroup tag="ol">
    <li v-for="x in products" :key="x">
      {{ x }}
    </li>
  </TransitionGroup>
</template>

<script>
  export default {
    data() {
      return {
        products: ['Apple','Pizza','Rice'],
        inpName: ''
      }
    },
    methods: {
      addEl() {
        const el = this.inpName;
        this.products.push(el);
        this.inpName = null;
      }
    }
  }
</script>

<style>
  .v-enter-from {
    opacity: 0;
    rotate: 180deg;
  }
  .v-enter-to {
    opacity: 1;
    rotate: 0deg;
  }
  .v-enter-active {
    transition: all 0.7s;
  }
</style>  -->


ADD AND REMOVE ELEMENTS
Khi loại bỏ các phần tử ở giữa các element khác, các phần tử khác sẽ rơi vào vị trí của phần tử bị loại bỏ
Để tạo hiệu ứng cho các mục còn lại trong danh sách được sắp xếp đúng vị trí khi một phần từ bị xóa
Chúng ta sẽ sử dụng v-move class được tạo tự động

Lưu ý: Để tạo animate cho v-mode class chúng ta có để đặt position: absolute; vào v-leave-active
Ví dụ:
<!-- .v-move {
  transition: all 0.7s;
}
.v-leave-active { position: absolute; } -->

Ví dụ hay về việc đó:
<!-- <template>
  <h3>The &lt;TransitionGroup&gt; Component</h3>
  <p>Items inside the &lt;TransitionGroup&gt; component are animated when they are created or removed.</p>
  <button @click="addDie">Roll</button>
  <button @click="addDie10">Roll 10 dice</button>
  <button @click="dice.sort(compareFunc)">Sort</button>
  <button @click="dice.sort(shuffleFunc)">Shuffle</button><br>
  <TransitionGroup>
    <div 
    v-for="x in dice" 
    :key="x.keyNmbr" 
    class="diceDiv" 
    :style="{ backgroundColor: 'hsl('+x.dieNmbr*60+',85%,85%)' }"
    @click="removeDie(x.keyNmbr)">
      {{ x.dieNmbr }}
    </div>
  </TransitionGroup>
</template>

<script>
  export default {
    data() {
      return {
        dice: [],
        keyNumber: 0
      }
    },
    methods: {
      addDie() {
        const newDie = {
          dieNmbr: Math.ceil(Math.random()*6),
          keyNmbr: this.keyNumber
        };
        this.dice.splice(Math.floor(Math.random()*this.dice.length),0,newDie);
        this.keyNumber++;
      },
      addDie10() {
        for(let i=0; i<10; i++) {
          this.addDie();
        }
      },
      compareFunc(a,b){
        return a.dieNmbr - b.dieNmbr;
      },
      shuffleFunc(a,b){
        return Math.random()-0.5;
      },
      removeDie(key) {
        const pos = this.dice.map(e => e.keyNmbr).indexOf(key);
        this.dice.splice(pos, 1);
      }
    },
    mounted() {
      this.addDie10();
    }
  }
</script>

<style>
.v-enter-from {
  opacity: 0;
  scale: 0;
  rotate: 360deg;
}
.v-enter-to {
  opacity: 1;
  scale: 1;
  rotate: 0deg;
}
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 0.7s;
}
.v-leave-active { position: absolute; }
.v-leave-from { opacity: 1; }
.v-leave-to { opacity: 0; }
.diceDiv {
  margin: 10px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  border: solid black 1px;
  border-radius: 5px;
  display: inline-block;
}
.diceDiv:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#app {
  position: relative;
}
</style>     -->

# --------------------------------


# --------------------------------
# ------- Build Your Project -----

When a Vue project is finished, it should move from being in "development mode" into "build" mode.
The build command compiles our Vue project into.html, .js and .css files that are optimized to tun directly in the brower.
We build our Vue project to create files on a server for others to access.

To 'Build' The Web Page: Để xây dụng Trang Web.

Cho đến nay chúng ta đã chạy dự án ở development mode, nghĩa là công cụ xây dụng Vite đang chạy 1 development server.
Khi bạn thực hiện các thay đổi trong quá trình development và save chúng. Vite sẽ update ngay lập tức.
Điều này đòi hỏi rất nhiều tài nguyên từ máy tính.

Bước build diễn ra sau giai đoạn development, khi trang đã sẵn sàng ra mắt cho cộng đồng.
Sau đó, chúng tôi phải xây dựng dự án của mình thành các tệp mà trình duyệt hiểu được mà không cần chạy vite ở development mode.
Bước build được thực hiện để giảm thiểu việc sử dụng tài nguyên server và cải thiện hiệu suất.

1. To Build your Vue application:

npm run build

2. When your project is built, Vite creates a folder 'dist' with all the files needed to run your project on public server
With file the browser unerstands .html, .css, .js thay vì file .vue chúng ta sử dụng trong quá trình development

3. To see your build project in the brower, use the commando:
npm run preview
-> This commando should open a brower window that displays the build project from the 'dist' folder.


# --------------------------------


# --------------------------------
# ------- VUE COMPOSITION API -----

DEFINE
Là một cách khác để viết ứng dụng Vue vào API options được sử dụng ở nơi khác trong hướng dẫn này
Trong Composition API, chúng ta có thể viết mã thoải mái hơn.
Nhưng nó đòi hỏi sự hiểu biết sâu sắc hơn và được coi là ít thân thiện hơn với người mới bắt đầu.

THE COMPOSITION API
Với Composition Api, logic được viết bằng cách sử dụng các hàm Vue đã import
Thay vì sử dụng Vue instance, phiên bản Vue mà chúng ta đã quen từ API options
Đây là cách composition Api có thể được sử dụng để viết ứng dụng Vue giúp giảm số lượng máy đánh chữ tron bộ lưu trữ bằng một nút.
Ví dụ:

<!-- <template>
  <h1>Example</h1>
  <img src="/img_typewriter.jpeg" alt="Typewriter">
  <p>Typewriters left in storage: {{ typeWriters }}</p>
  <button @click="remove">Remove one</button>
  <p style="font-style: italic;">"{{ storageComment }}"</p>
</template>

<script setup>
  import { ref, computed } from 'vue'

  const typeWriters = ref(10);

  function remove(){
    if(typeWriters.value>0){
      typeWriters.value--;
    }
  }

  const storageComment = computed(
    function(){
      if(typeWriters.value > 5) {
        return "Many left"
      }
      else if(typeWriters.value > 0){
        return "Very few left"
      }
      else {
        return "No typewriters left"
      }
    }
  )
</script>     -->

Ở chỗ setup attribute trong script giúp việc sử dụng composition API dễ dàng hơn. 
Bằng cách sử dụng setup attribute, các biến và các hàm có thể được sử dụng trực tiếp bên trong <template></template>

ref và computed phải được import trước khi sử dụng.
Trong Option API chúng tôi không cần import bất cứ thứ gì để khai báo reactive variables hoặc computed properties

ref được sử dụng để khai báo thuộc tính 'typewrites' là reactive với 10 là giá trị ban đầu.
Để khai báo typewrites property là reactive.
=> Có nghĩa là {{ typewrites }} trong template sẽ được tự động hiển thị lại để hiển thị giá trị được cập nhật khi giá trị typewrites thay đổi

Với Options API, các data property sẽ trở nên reactive nếu cần khi ứng dụng được xây dựng, chúng không cần phải khai báo rõ ràng là reactive

Hàm remove() được khai báo trong Composition API sẽ được khai báo theo property methods nếu được viết trong Option API
Computed property storageComment được khai báo trong Composition API sẽ được khai báo theo property computed nếu được viết trong Option API

THE OPTIONS API
Ví dụ trong Compostion API trên được viết lại dưới options API

<!-- <template>
  <h1>Example</h1>
  <img src="/img_typewriter.jpeg" alt="Typewriter">
  <p>Typewriters left in storage: {{ typeWriters }}</p>
  <button @click="remove">Remove one</button>
  <p style="font-style: italic;">"{{ storageComment }}"</p>
</template>

<script>
export default {
  data() { 
    return {
      typeWriters: 10
    };
  },
  methods: {
    remove(){
      if(this.typeWriters>0){
        this.typeWriters--;
      }
    }
  },
  computed: {
    storageComment(){
      if(this.typeWriters > 5) {
        return "Many left"
      }
      else if(this.typeWriters > 0){
        return "Very few left"
      }
      else {
        return "No typewriters left"
      }
    }
  }
}
</script> -->

# --------------------------------

