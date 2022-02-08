### 18.3.定义组件注意事项：

> 组件声明和注册要分先后顺序，先声明组件  然后注册
> 
> 注册组件的时候注意命名，不要和html的原有标签名冲突
> 
> name配置项目前的作用：规定了在Vue的工具中展示的组件名
> 
> 组件的使用的时候，可以使用单标签，也可以使用双标签

组件一定要有自己的模板

注册组件（key：value==>注册的名字：原来的名字，将来在使用的时候使用注册的名字）

### 18.4.组件的嵌套

全局注册Close组件（如果不是很多组件都要使用的组件，请不要使用全局注册）

Vue.component(“Close”，Close)

### 18.5.VueComponent

> 组件的本质就是一个VueComponent构造函数，是调用Vue.extend自动返回的
> 
> 当组件被使用的时候（<xxx>），就会实例化当前组件的VueComponent函数，得到一个实例化对象
> 
> 组件内部的方法、生命周期函数等的this都是指向这个组件实例
> 
> vc就是一个小型的vm（每一个组件都有自己的vc，因为每次定义组件的时候，都是返回一个新的VueComponent构造函数），每一个组件内部都是相对独立的。

### 18.6.一个重要的内置关系

VueComponent.prototype.\__proto__ = Vue.prototype

> 想要让每一个组件实例vc都能访问到一个方法或者属性
> 
> Vue.prototype.xxx = xxx

### 18.7.Vue.extend简写形式

Vue.extend(option)可以直接简写option配置对象，省略Vue.extend

> 在这个组件被注册之前，它都是一个普通的对象
> 
> 当组件被注册的时候，会判断当前注册的组件是VueComponent构造函数还是一个配置对象，如果是对象，则Vue底层帮我们实现了Vue.extend方法
> 
> 以后定义组件的时候可以直接书写一个配置对象，当这个组件被注册的时候，Vue就会帮我们Vue.extend得到一个VueComponent构造函数
