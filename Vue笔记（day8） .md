#### 消息订阅（subscribe）与发布（publish）

> 1. (1) 订阅消息 --对应绑定事件监听
>
>    (2) 发布消息 --分发事件
>
>    (3) 取消消息订阅 --解绑事件监听
>
>    需要引入一个消息订阅与发布的第三方实现库: **`PubSubJS`**

> 2.相关语法
>
> (1) `import PubSub from 'pubsub-js'` // 引入
>
> (2) `PubSub.subscribe(‘msgName’, functon(msgName, data){ })` // 订阅消息, 返回token
>
> (3) `PubSub.publish(‘msgName’, data):` 发布消息, 触发订阅的回调函数调用
>
> (4) `PubSub.unsubscribe(token/msgName):` 取消消息的订阅

> 1. 消息订阅与发布与全局事件总线一样都可以实现任意组件间通信
>
> 2. 但需要额外引入第三方实现库, 而全局事件总线不用, 一般在vue项目中不用
>
> 3. 实现流程
>
>    (1) 在接收数据的组件:
>
>     ① mounted(): 订阅消息, 在回调函数中接收数据并处理
>
>     ② beforeDestroy(): 取消订阅
>
>    (2) 在发送数据的组件: 发布消息

```js
 //因为pubsub发布的时候是异步，所以我们可以在生命周期中mounted中订阅即可
    //订阅的回调函数的第一个参数是当前订阅的名称，第二个参数是发布的新数据
    PubSub.subscribe("news", (_, value) => {
      ........
      ........
    });
```

#### 事件总线

> 1. 一种组件间通信的方式，适用于任意组件间通信。

![image-20220119182814315](C:\Users\Liu\AppData\Roaming\Typora\typora-user-images\image-20220119182814315.png)

> 安装事件总线

```js
new Vue({
   ......
   beforeCreate() {
       Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
   },
   ......
})
```

> 接收数据： 组件想接收数据，则在 接收数据的 组件中给$bus 绑定自定义事件，事件的回调留在 接收数据的 组件自身。

```js
this.$bus.$on("绑定的自定义事件名", 自定义事件);
```

> 提供数据：发送数据的组件 调用$bus上绑定的自定义事件，并给事件函数传值，向给$bus绑定该事件的组件传值

```js
this.$bus.$emit("调用的自定义事件名", value);
```

> 1. 最好在 `beforeDestroy` 钩子中，用$off 去解绑当前组件所用到的事件。

#### 插槽

> 插槽用于 在组件复用中对各个复用组件中局部差异的处理，

**默认插槽**

> 子组件中通过<slot></slot>标签定义插槽，
>
> 在组件中书写一个插槽，那么在使用这个组件的时候，可以向插槽中插入任意的html结构
>
> ​    插槽就是一个 slot标签 
>
> ​    当结构插入插槽的时候 会覆盖slot标签

```vue
//父组件
<!-- 
      在使用组件的时候 我们希望能够向组件中传入一些我们特定的HTML结构，放在组件的插槽中
      我们需要把组件写成双标签的格式，在组件内部书写特定的HTML结构
     -->
<div> 
          <Son>特定的HTML结构 </Son>
		  <Son>  <img/>     </Son>
          <Son>  <video></video>  </Son>
</div>
```

```vue
//子组件Son
<div class="box">
    <h2>{{ title }}分类</h2>
     <!-- 当特定结构插入插槽的时候 会覆盖slot标签-->
    <slot></slot> 
</div>
```

**具名插槽**

> 组件复用，复用组件间有多处需要使用特定的HTML结构时，
>
> 可在需复用的子组件中需要使用特定结构处分别创建<slot>标签 并给name属性
>
> 在父组件中复用子组件时，可通过给特定HTML结构的最外层结构添加 slot属性  slot="想要插入到的插槽名称"

**作用域插槽**

> 数据在插槽所在组件的自身，但根据数据生成的结构需要组件的使用者来决定。

> ```vue
> //父组件中复用子组件
>  <!-- 插槽就是你可以插入你想要的html结构 -->
> <Son title="游戏">
>       <template scope="o"> <!-- 通过scope属性确定作用域 -->
>         <ul>
>           <li v-for="item in o.contents" :key="item.id">{{ item.gameName             }}</li>
>         </ul>
>       </template>
>  </Son>
> ```

> ```vue
>  <!-- 
>         在定义插槽的位置 传入数据，将来使用插槽的位置就能拿到数据了
> 
>      -->
> <template>
>    <slot :contents="contents"></slot>
> </template>
> 
> <script>
> export default {
>   name: "List",
>   data() {
>     return {
>       contents: [],
>     };
>   },
> }
> </style>
> ```

