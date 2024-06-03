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