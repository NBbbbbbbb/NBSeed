### 1.1.开发配置

Vue.config.productionTip = false 关闭开发模式下的提示

Vue书写格式：

<!-- Vue容器 -->

```html
<div id="app">
    <!-- 模板书写区域 -->
    <!-- 双大括号语法可以直接书写数据，会直接去实例上去寻找 -->
    <h1>hello {{msg}}</h1>
</div>
<script>
    //关闭开发模式下的提示
    Vue.config.productionTip = false;

    //Vue.js提供了Vue构造函数，供我们实例化使用
    console.log(Vue);

    //实例化Vue构造函数，得到实例对象，Vue在实例化的时候接受一个配置对象
    const vm = new Vue({
        //指定Vue管理的容器,使用el属性,值为选择器
        el: "#app",
        //指定当前实例的数据，使用data属性，值为一个对象（以后可以是一个函数）
        data: {
            msg: "World"
        }

    });

    //查看Vue实例
    console.log(vm);
</script>
```

### 2.1.el配置的详解

el属性值有两种写法：1.选择器 2.获取的DOM元素

								容器和实例是对应的，所以习惯性写作为id

### 2.2.data配置详解

data对象中属性值的类型可以是任意的，双大括号语法可以直接去使用

### 2.3.data的函数式写法

data属性可以支持书写一个函数

data写成函数，但是最终目的还是为了提供数据，所以要return一个对象，数据在对象里

data书写成函数的话，要书写普通函数，不能书写箭头函数，否则this就不能只想Vue实例了

### 2.4.$mount挂载

如果Vue实例在实例化时没有收到el选项，则它处于未挂载状态，没有关联的DOM元素

可以使用vm.$mount()手动地挂载一个未挂载地实例

$mount挂载和el属性挂载本质上是没有区别的

但是$mount可以延迟进行挂载

```html
vm.$mount("#app")
```

### 3.1双大括号语法（插值语法）

> 里面书写的数据都会直接从vm实例上寻找
> 
> 不管是什么类型，都会转为字符串类型（直接加引号）展示，如果是null和undefined则直接是空串
> 
> 插值语法中可以书写js表达式
> 
> 插值语法中的字符不是去vm上查找的属性，则务必添加引号

### 4.1数据代理

```javascript
<script>
        /* 
            数据代理：
                通过一个对象（obj1）代理对另一个对象（obj2）中属性（b属性）的操作（读/写
        
        */
        const info = {
            person: {
                age: 18
            }
        }

        //如果没有数据代理 则访问age 需要通过info.person.age
        console.log(info.person.age);

        //给age设置一个代理
        const obj = {}
        Object.defineProperty(obj, "age", {
            get() {
                return info.person.age
            },
            set(value) {
                console.log("value", value);
                info.person.age = value;
            }
        })
        console.log(obj);
        console.log(obj.age); //可以得到info中person的age 18
        obj.age = 20; //可以将info中person的age变成20
    </script>
```

### 4.2.Vue中的数据代理

> 插值语法的数据都是从Vue的实例vm对象上寻找
> 
> Vue中的data都会放在vm实例的_data属性上
> 
> 我们可以在插值语法中通过_data.xxz找到对应的数据，但是这样未免太麻烦
> 
> Vue中设置了数据代理，在vm上直接设置了对应的属性，当我们直接访问vm上的数据属性的时候，会直接操作_data属性中的数据
> 
> Vue在实例化的时候，会遍历data配置中的属性，然后通过defineProperty方法给每一个属性配置了一个代理，放在了vm身上，供插值语法直接使用

### 5.1.v-bind强制绑定

> 如果直接给标签设置属性，则这个属性值是固定的，不会从vm上寻找
> 
> 使用v-bind去设置属性，会把属性值和数据绑定起来
> 
> v-bind可以简写为：

> 强制绑定需要拼接，如果和字符串拼接的话，请把字符串添加引号
只要是强制绑定的属性，值都写在引号中，引号是单双都可以，但是在引号中的区域就是js语法区域了，可以书写js的反引号等语法

总结：强制绑定的语法中，是直接去vm上读取数据，并可以书写js表达书的

### 6.1.基础双向绑定

- 强制绑定：属性的值强制为数据中的值，input并不能影响数据中的值
- v-model：value指令进行数据双向绑定
- v-model在一定程度上就是代表表单的value，所以可以直接书写v-model=""
- textarea是表单标签，但是内容是写在双标签内部的，获取值是通过value获取的
- textarea上也是使用v-model进行数据双向绑定的

### 6.2.复选框的双向绑定

单个复选框：双向绑定，绑定的是当前框的checked状态

多个复选框：当当前的框被选中后会把value值放在对应的数组中去

对多个同类型复选框，使用v-model绑定数据中的数组，只要数组改变，对应的选项框就会选中，选项框选中，数组中就会多了这个值

### 6.3.单选框的数据双向绑定

单选框基本上都是多个一起使用的，我们只想知道选中的是哪一个，并且只能选中一个，并且value值是字符串类型

所以双向绑定的数据直接初始化为一个字符串就可以

### 6.4.选则下拉框的双向绑定

下拉框单选：

```html
<select name="" id="" v-model="winName">
            <option disabled>请选择</option>
            <option>{{name[0]}}</option>
            <option>{{name[1]}}</option>
            <option>{{name[2]}}</option>
            <option>{{name[3]}}</option>
        </select>
```

下拉框多选：

```html
<select name="" id="" v-model="winNames" multiple>
            <option disabled>请选择</option>
            <option>{{name[0]}}</option>
            <option>{{name[1]}}</option>
            <option>{{name[2]}}</option>
            <option>{{name[3]}}</option>
        </select>
```

### 7.1.基础绑定事件

> v-on：事件类型=”事件函数“ 可以给某个元素绑定事件
> 
> 事件函数可以书写在data中，但是我们不会这么做，因为写在data中会在vm生成对应的数据代理，并有自己的setter函数和getter函数，但是我们不需要这些
> 
> methods将被混入到Vue实例中，可以直接通过vm实例访问这些方法，或者在指令表达式中使用
> 
> methods中方法中的this自动绑定为Vue实例（不要使用箭头函数）

v-on可以简写为@
