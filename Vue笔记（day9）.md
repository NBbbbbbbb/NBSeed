### 1.Vuex中读取数据

vuex提供了一个Store的构造函数，方便我们创建能够管理的Action Mutation State等的Store对象

```javascript
export default new Vuex.Store({
  actions,
  mutations,
  state
})
```

### 2.Vuex完整流程

- 创建Actions对象 commit提交给mutations
- 创建mutations对象，用来修改state的值 mutations中的函数必须是同步的
- 创建state对象

> 当操作数据没有额外的操作的时候，可以直接跳过actions 直接commit到mutations中
> 
> vuex中的计算属性，将来通过$store.getters获得

### 3.mapState的使用

> mapState返回一个对象
> 
> 用于帮助我们把state中的数据读出来，生成对应的计算属性
> 
> 通过解构返回的对象，则可以把生成的计算属性释放到computed中

### 4.其他映射map的使用

- mapGetters用于帮助我们把getters中的数据读出来，生成对应的计算属性（又称：映射 getters）
- 在使用mapActions的时候，需要绑定事件的时候就传入参数

### 流程

1. npm i vuex 下载 vuex
2. 在 main.js 中引入 vuex
3. 把 vuex 这个插件给使用了 Vue.use(Vuex)
4. Vuex 会提供一个核心的东西-store，把 store 配置在 vm 的配置上，此时所有的组件实例都会有一个$store 的属性，值为在 vm 配置上的值

```markdown
    1. 当use Vuex的时候，会先调用Vuex的install方法
    2. 得到new Vue中配置的store，并放在Vm上命名叫$store
    3. Vuex会执行一个 全局注入的操作 遍历得到每一个组件 给每一个组件实例生成一个$store的属性
    4.每一个组件实例的$stroe属性都指向父组件的$store
    5.总结：每一个组件的$store都是指向的vm上$store,vm上的$store是从配置向store得来的
```

