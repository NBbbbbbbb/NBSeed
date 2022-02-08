### 1、vue插件

> 插件通常用来为Vue添加全局功能。
>
> 一般有几种：
>
> 1. 添加全局方法或者 property。
> 2. 添加全局资源：指令/过滤器/过渡等。
> 3. 通过全局混入来添加一些组件选项。
> 4. 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
> 5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。

**开发插件**

> Vue.js 的插件应该暴露一个 `install` 方法。这个方法的第一个参数是 `Vue` 构造器

```js
 install(Vue) {
        //插件功能1：自定义过滤器
        Vue.filter("addLine", (val) => {
            return val + "~";
        });
        //插件功能2：自定义指令
        Vue.directive("red", (e) => {
            e.style.background = "red"
        });
        //插件功能3：自定义组件
        Vue.component("Hello", Hello)

        //插件功能4:扩展全局属性
        Vue.prototype.a = 100;
    }
```

**使用插件**

> 通过全局方法 `Vue.use()` 使用插件。它需要在调用 `new Vue()` 启动应用之前完成
>
> Vue在使用插件的时候，会调用插件提供的install方法，并传入Vue用来扩展

```js
Vue.use(插件名);
new Vue({
    el: "#app",
    render: h => h(App),
})
```

### 2、localStorage

> LocalStorage是浏览器本地持久化存储技术，也叫永久存储
>
> 创建localStotrage本地存储

```js
localStotrage.setItem('key', 'value');
```

> 该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。
>
> 读取本地存储

```js
localStorage.getItem("key")
```

### 3、通讯组件

**props方式**

- props可以把父组件的值传递给子组件
- props也可以向子组件传递一个方法，子组件调用这个方法并传参，父组件就可以得到子组件传递的值。

```js
//父组件中向子组件传值
 <WuHan :NBSubject="NBSubject" :getWuHanJob="getWuHanJob" />
//子组件中通过props接收
 props: ["NBSubject", "getWuHanJob"],
```

**自定义事件方式**

> 适用于：子组件 ===> 父组件
>
> 在父组件中给子组件绑定自定义事件，事件函数在父组件中
>
> - 第一种方式，在父组件中：`<Demo @atguigu="test"/>` 或 `<Demo v-on:atguigu="test"/>`
>
> - 第二种方式，在父组件中：
>
>   ```js
>   <Demo ref="demo"/>
>   ......
>   mounted(){
>      this.$refs.demo.$on('atguigu',()=>{})
>   }
>   ```

> 子组件中触发事件并向父组件中的自定义事件传值
>
> - 触发自定义事件：`this.$emit('父组件中被传值的事件名',数据)`
> - $emit 触发父组件中的自定义事件

> 如果想要给组件绑定一个原生的事件，请使用.native修饰符
>
> ```js
> <WuHan
>         :NBSubject="NBSubject"
>         @abc="abc"
>         @bcd="bcd"
>         //绑定原生事件需要使用修饰符.native
>         @click.native="wuhanClick"
>       />
> ```

**自定义事件解绑和原生事件**

> 因为事件是绑定给子组件的，所以解绑的方法也应该在子组件调用
>
> ​    Vue原型对象提供了一个$off的方法 供我们解绑自定义事件
>
> ​    $off方法接受一个字符串参数，就是被解绑的事件名
>
> ​    $off方法接受一个数组参数，数组中包含所有被解绑的事件名

```js
this.$off(["abc", "bcd"])
```

