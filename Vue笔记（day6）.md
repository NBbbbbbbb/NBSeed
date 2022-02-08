### 2.render、eslint、scoped

> 因为vue脚手架使用的是runtime版本的vue文件，没有渲染的方法，需要使用vue-template-compiler进行模板编译
> 
> vue-template-compiler提供了一个配置：render，当vm被实例化的时候，就会执行render方法，render方法接收一个参数是一个挂载App的函数h，在函数内部调用h方法并传入App组件，并返回h函数的返回值，即可把App组件挂载在容器里
> 
> 因为其他组件都是直接或者间接放在App上，所以只需要App组件这样挂载即可，其他组件书写方式不变
> 
> render:h=>h(App)

### 3.ref的使用

> 可以给模板上的元素设置ref属性，这个ref属性其实可以看作是id的替代品
> 
> 当ref被设置以后，在vc或者vm上的$refs对象属性上就有了当前ref作为key，DOM节点作为值的一组键值对
> 
> 我们可以通过this.$refs.xxx得到某个DOM节点

判断xxx是不是DOM节点

xxx instanceof HTMLElemnet

### 4.props的使用

> props中的值是不允许修改的，如果真的要修改，则通知数据的拥有者去修改
> 
> 用数组的push方法，虽然可以实现props的修改，但是要尽量避免使用

> props一定要在配置中接受，否则不能使用，props的值也直接放在了vc上，所以可以直接在模板中访问

> 默认的props的写法
> 
> props：["xxx","xxx"]

> props带类型校验的写法
> 
> props:{xxx:数据类型}

> props详细配置
> 
> props:{
> 
> xxx:{
> 
> type:数据类型,
> 
> require:是否必填（true/false）,
> 
> default:默认值
> 
> }
> 
> }

### 5.过滤器的使用

> 局部注册过滤器
> 
> filters：{}
> 
> 过滤器函数是没有this指向的

> 注册全局过滤器
> 
> Vue.filter

> 数字.toFixed(x) 保留x位小数

### 6.自定义组件

> 局部定义指令
> 
> directives：{}
> 
> 参数1是当前书写指令的DOM 参数2是配置对象

> 全局定义指令
> 
> Vue.directive()
> 
> 参数1：自定义指令的名字
> 
> 参数2：回调函数
