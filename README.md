# VUE - PRACTICE

# --------------------------------
# ------- PROP - DEFINE -------
# => Props is configuration option in Vue.
# => Props là một tùy chọn cấu hình trong Vue.

# => With props, We can pass data to the components via custom attributes to the component tag.
# => Với props, Chúng ta có thể truyền data đến các components thông qua các thuộc tính tùy chỉnh cho component tag.

# PASS DATA TO A COMPONENT
# => Props attributes are written with a dash - to separate words (kebab-case) in the <template> tag, 
# => Props attributes (Đạo cụ) được viết bằng dấu gạch ngang để phân tách các từ (kebab-case) trong <tempalte></tempalte> tag

# RECEIVE DATA IN SIDE A COMPONENT
# => But kebab-case is not legal in JavaScript. So instead we need to write the attribute names as camelCase in JavaScript, and Vue understands this automatically!
# => Nhưng kebeb-case không đúng trong JavaScript. Vì vậy, thay vào đó chúng ta cần viết tên thuộc tính là camcelCase trong JavaScript, và Vue tự động hiểu.

# BOOLEAN PROPS
# => We can achieve different functionality by passing props of different data types.
# => Chúng ta có thể đạt được các chức năng khác nhau bằng cách chuyển các props của các loại dữ liệu khác nhau

# => And we are able to define rules for how attributes are given when components are created from App.vue
# => Và chúng ta có thể định nghĩa các quy tắc về cách cung cấp các thuộc tính khi các components được tạo từ App.vue

# => To pass props with a data type different to String, we must write v-bind: in front of the attribute we want to pass
# => Để truyền props với kiểu dữ liệu khác string, chúng ta phải sử dụng v-bind: đằng trước thuộc tính chúng ta muốn truyền

# PROPS INTERFACE

# PROPS AS AN OBJECT
<!-- => props: {
    foodName: String,
    fooodDesc: String,
    isFavorite: Boolean
}, -->
# => With props defined in this way, other people can look inside FoodItem.vue and easily see what the component expects
# => Với cách định nghĩa props trên, thì người dùng khác có thể nhìn thấy bên trong file FoodItem.vue dữ liệu mong muốn của props

# REQUIRED PROPS
# => To tell Vue that a prop is required we need to define the prop as an object. Let's make the prop 'foodName' required, like this:
<!-- props: {
    foodName: {
        type: String,
        required: true
    },
    foodDesc: String,
    isFavorite: Boolean
} -->

# DEFAULT VALUE
# We can set a default value for a prop
# Let's create default value for the 'foodDesc' prop in the 'FoodItem' component, and then create such an item for rice without defining the 'foodDesc' prop
# => Khi định nghĩa giá trị cho một prop thì khi sử dụng component đó bên trong File cha nào đó thì không cần phải gọi nó ra
# => Chỉ gọi nó ra khi cần custome giá trị đó

# PROPS VALIDATOR FUNCTION
# We can also define a validator function that decides if the prop vvalue is valid or not.
# => Chúng ta có thể định nghĩa một hàm xác thực để quyết định xem giá trị prop có hợp lệ hay không

# Such validator functions must return either true or false.
# => Các hàm xác thực như vật phải trả về đúng hoặc sai.

# When the validator returns false, it means the prop value is invalid.
# => Khi trình xác nhận trả về false, điều đó có nghĩa là giá trị prop không hợp lệ.

# An invalid prop value generates a warning in the browser console when we run our page in developer mode, and the warning is a useful hint to make sure the components are used as intended.
# => Giá trị prop không hợp lệ sẽ tạo ra cảnh báo trong console khi chúng ta chạy trang của mình ở chế độ của developer và cảnh báo là gợi ý hữu ích để đảm bảo các component được sử dụng như dự định.


# MODIFY PROPS
# When a component is created in the parent alement we are not allowed to chang the value of the prop recevied in the child element. 
# So inside FoodItem.vue we cannot change the value of the 'isFavorite' prop we get from App.vue. The prop is read-only from the parent, which is App.vue in our case

# Khi 1 component được tạo trong phần tử cha, chúng ta không được phép thay đổi giá trị của prop nhận được trong phần tử con.
# Vì vậy bên trong FoodItem.Vue, chúng ta không thể thay đổi giá trị của prop 'isFavorite' mà chúng ta nhận được từ App.vue. Prop ở chế độ chỉ đọc từ parent, đó là App.vue trong trường hợp của chúng tôi

# ------- PROP - DEFINE -------
# --------------------------------



# --------------------------------
# ------- VUE - V-FOR - COMPONENTS -------

# DEFINE
# Components can be reused with v-for to generate many elements of the same kind
# => Components có thể được tái sử dụng với v-for để tạo ra nhiều element cùng loại

# When generating elements with v-for from a component, it is also very helpful that props can be assigned dynamically based on values from an array.
# => Khi tạo các element bằng v-for từ 1 component, cũng rất hữu ích khi các props có thể được gán tự động dựa trên các giá trị từ một mảng

# ------- VUE - V-FOR - COMPONENTS -------
# KEY - ATTRIBUTE
# => Khi dùng v-for để lặp các phần tử, Vue tái sử dụng các phần tử DOM để tối ưu hóa hiệu suất
# => Nếu mảng dữ liệu thay đổi, Vue có thể tái sử dụng các phần tử không đúng cách nếu không có thuộc tính 'key'
# => Key giúp Vue phân biệt các phần tử một cách chính xác bằng cách cung cấp một định danh duy nhất
# --------------------------------

