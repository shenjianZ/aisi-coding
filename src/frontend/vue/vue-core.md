---
title: vue核心语法
icon: vue
order: 2
category: vue
tag:
  - core

date: 2024-04-23
---

## Vue3核心语法

::: tip   OptionsAPI 与 CompositionAPI

- Vue2 是 OptionsAPI (选项式、配置式)风格
- Vue3是CompositionAPI (组合式)风格

:::
### setup

- `setup`是一个配置项，在`script`标签中 使用
- `setup`中 `this`是 `undefined` ,弱化了`this`
- `setup`的执行时间在`beforecreate()` 之前

> 面试重点：  **data、methods和setup的关系**
>
> - `data()`、`methods()`是在`setup()`之后执行的，这意味着他们两个可以读取到`setup()`的变量和函数

`setup` 语法糖

```vue
<script setup lang="ts">

</script>
```

`setup`写组件名称的插件

```shell
npm i vite-plugin-vue-setup-extend -D
```

在`vite.config.ts` 进行引入

```typescript
import { defineConfig } from 'vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  plugins: [ VueSetupExtend() ]
})
```

### ref

> `ref` 创建基本类型的响应式数据 ,`RefImpl`对象
>
> - 使用 `.value` 访问 变量

```typescript
import {ref,  type Ref,  type UnwrapRef} from 'vue'
let age: Ref<UnwrapRef<number>> = ref(18)
age.value: number = 20
```

> `ref`创建对象类型的响应式数据,`RefImpl`对象
>
> - 使用 `.value` 访问 变量

```typescript
import {type Ref, ref, type UnwrapNestedRefs, type UnwrapRef} from 'vue'
let obj: Ref<UnwrapRef<{ name: string; age: number }>> = ref({
  name: 'shenjianZ',
  age: 18
})
obj.value.name: string = 'poop'
```

### reactive

> `reactive`创建对象类型的响应式数据,`Proxy()`对象
>
> - 直接访问变量

```typescript
import {reactive, type UnwrapNestedRefs} from 'vue'
let obj: UnwrapNestedRefs<{ name: string; age: number }> = reactive({
  name: 'shenjianZ',
  age: 18
})
obj.name: string = 'poop'
```

### ref 与 reactive

> - `ref`数据使用`.value`拿到的其实是一个`reactive`对象，底层是一个 `Proxy()`对象
> - `ref` 数据|直接赋值不会失去响应式，`reactive` 数据直接赋值会失去响应式，可以使用`Object.assign(source,target)`去整体替换,后边的对象属性分配给前边的对象
> - `reactive`定义的响应式数据是“深层次”的，这意味着 `ref`定义的数据也会是如此

使用的原则：

>1. 对于基本数据类型 ，用 `ref`
>2. 对于对象类型，层级不深， 用 `ref、reactive` 均可
>3. 对于对象类型，层级较深，用 `reactive`

### toRef、toRefs

>对于`reactive`数据，想要通过解构表达式拿到他的响应式的属性，需要使用`toRef`、`toRefs`
>
>- 底层其实是将 属性 转变成了 `ref`类型的响应式数据

```vue
<script>
import {reactive, toRefs, type UnwrapNestedRefs} from 'vue'
let obj: UnwrapNestedRefs<{ name: string; age: number }> = reactive({
  name: 'shenjianZ',
  age: 18
})
let {name,age} = toRefs(obj)
</script>
<template>
    <h3>name :{{name}} </h3>
    <h3>age: {{age}} </h3>
  <button @click="name+='1';age +=1">change obj</button>
</template>
```

```vue
<script>
import {reactive, toRef, type UnwrapNestedRefs} from 'vue'
let obj: UnwrapNestedRefs<{ name: string; age: number }> = reactive({
  name: 'shenjianZ',
  age: 18
})
let age = toRef(obj, 'age')
let name = toRef(obj, 'name')
</script>
<template>
    <h3>name :{{name}} </h3>
    <h3>age: {{age}} </h3>
  <button @click="name+='1';age +=1">change obj</button>
</template>
```

### computed

> `computed()`的计算结果也是一个`ref`的类型数据

```typescript
import {computed, reactive, toRef, type UnwrapNestedRefs} from 'vue'

let obj: UnwrapNestedRefs<{ name: string; age: number }> = reactive({
  name: 'shenjianZ',
  age: 18
})
const info = computed(() => `name:${obj.name} age:${obj.age}`)
```

- 默认这个计算属性 `info` 是只读的

- 使用set和get

  ```typescript
  const info = computed({
    get() {
      return `name:${obj.name} age:${obj.age}`
    },
    set(value) {
      const [name, age] = value.split(' ')
      console.log(name, age)
      obj.name = name
      obj.age = Number(age)
    }
  })
  ```

### watch

> `ref`定义的基本类型的响应式数据
>
> - 使用` watch()`的返回值`stopWatch()` 来判断一定条件取消监视

```vue
<script>
import {ref, watch} from "vue";

let per = ref(1)
const stopWatch = watch(per, (n, o) => {
  console.log(n, o);
  if (n >= 10) {
    stopWatch()
  }
})
</script>

<template>
  {{per}} <br>
  <button @click="per++">+</button>
</template>
```

>`ref`定义的对象类型的响应式数据
>
>- 默认只会监视对象的地址值，只要对象的地址值不变，不会触发监视
>- `{deep:true}` 开启深度监视 ，对象的属性发生变化，也会触发监视
>- `{immediate:true}`页面加载时执行一次监视函数的逻辑

```vue
<script>
import {type Ref, ref, type UnwrapRef, watch} from "vue";
let obj: Ref<UnwrapRef<{ name: string; age: number }>> = ref({
  name: 'shenjianZ',
  age: 18
})
watch(obj, (value) => {
  console.log(value)
}, {deep: true, immediate: true})
</script>

<template>
  <h3>name :{{ obj.name }} </h3>
  <h3>age: {{ obj.age }} </h3>
  <button @click="obj.name+='q';obj.age +=1">change obj</button>
</template>
```

>`recative`定义的对象类型的响应式数据
>
>- 默认开启深度监视，且无法关闭深度监视

```vue
<script>
import {reactive, type UnwrapNestedRefs, watch} from "vue"
let obj: UnwrapNestedRefs<{ name: string; age: number }> = reactive({
  name: 'shenjianZ',
  age: 18
})
watch(obj, (value) => {
  console.log(value)
}, {immediate: true})
</script>

<template>
  <h3>name :{{ obj.name }} </h3>
  <h3>age: {{ obj.age }} </h3>
  <button @click="obj.name+='q';obj.age +=1">change obj</button>
</template>
```

> - 函数返回值的属性，基本类型
>
> - `getter`函数 ，对象类型

监视 `obj.age` 这个属性

- `() => obj.age` 需要使用函数返回

```vue
<script>
import {reactive, ref, type UnwrapNestedRefs, watch} from "vue";
let obj: UnwrapNestedRefs<{ name: string; age: number }> = reactive({
  name: 'shenjianZ',
  age: 18
})
watch(() => obj.age, (n, o) => {
  console.log(n, o)
}, {immediate: true})
</script>
<template>
  <h3>name :{{ obj.name }} </h3>
  <h3>age: {{ obj.age }} </h3>
  <button @click="obj.age +=1">change age</button>
</template>
```

监视 `obj.process` 这个属性

- `() => obj.process` 需要使用函数返回，且开启深度监视

```vue
<script>
let obj: UnwrapNestedRefs<{ name: string; age: number; process: { name: string, state: number } }> = reactive({
  name: 'shenjianZ',
  age: 18,
  process: {
    name: 'process',
    state: 1
  }
})
watch(() => obj.process, (n, o) => {
  console.log(n, o)
}, {deep: true, immediate: true})
</script>

<template>
  <h3>name :{{ obj.name }} </h3>
  <h3>age: {{ obj.age }} </h3>
  <button @click="obj.age +=1">change age</button>
  <button @click="obj.name+='q';obj.age +=1">change obj</button>
</template>
```

监视 `obj.process`、`obj.age` 这个属性

- `[() => obj.process,() => obj.name]` 需要使用函数返回，并放在一个数组当中，且开启深度监视

```vue
<script>
import {reactive, type UnwrapNestedRefs, watch} from "vue";
let obj: UnwrapNestedRefs<{ name: string; age: number; process: { name: string, state: number } }> = reactive({
  name: 'shenjianZ',
  age: 18,
  process: {
    name: 'process',
    state: 1
  }
})
watch([() => obj.process, () => obj.age], (n, o) => {
  console.log(n, o)
}, {deep: true, immediate: true})
</script>

<template>
  <h3>name :{{ obj.age }} </h3>
  <h3>name: {{ obj.process.name }} </h3>
  <button @click="obj.age +=1">change age</button>
  <button @click="obj.process.name+='~';obj.process.state +=1">change process</button>
</template>
```

### watchEffect

> - 不用指定需要监视的 对象和数据

```typescript
watchEffect(() => {
  console.log(obj)
  console.log(obj.age)
})
```

1. 当 `obj` 对象的地址值发生变化，`watchEffect`触发监视，运行这个回调函数
2. `age`属性的值发生变化时，`watchEffect`触发监视，运行这个回调函数

### watch 与 watchEffect

> - watch 需要指出要监听的数据
> - watchEffect 不需要，回调函数中使用到的便是需要监听的
> - watch  监听对象是否仅仅监视地址值 ，是否深度监听 ，取决于使用的是ref 、是否开启了深度监听
> - watchEffect  如果使用了某个对象或内部的对象，只会监听对象的地址值的变化

###  标签的ref属性

> 为DOM元素创建引用，用于直接操作DOM元素

```vue
<script>
let obj: UnwrapNestedRefs<{ name: string; age: number }> = reactive({
  name: 'shenjianZ',
  age: 18
})
let ag_e = ref()
function refUse() {
  console.log(ag_e ,ag_e.value) <!-- 输出 RefImpl <h3>age:18</h3> <-->
}
</script>

<template>
  <h3 ref="ag_e">age :{{ obj.age }} </h3>
  <button @click="refUse()" type="button">ref use</button>
</template>
```

>为组件对象创建引用，用于操作组件对象的实例
>
>- 在本例中，在`app.vue`中引用`poop.vue`的属性(ref类型)`a，b，c` ，注意需要使用`defineExpose`暴露给外部使用

`poop.vue`

```vue
<script setup lang="ts">
import {ref,defineExpose} from "vue";
let a = ref('25')
let b = ref('10')
let c = ref(true)
defineExpose({a, b, c})
</script>

<template>
  <div id="uz">poop</div>
</template>
```

`app.vue`

```vue
<script>
import {ref} from "vue";
import poop from './components/poop.vue'

let uz = ref()
function refUse2() {
  console.log(uz, uz.value)
}
</script>

<template>
  <poop ref="uz"/>
  <button @click="refUse2()" type="button">ref use</button>
</template>
```

### 泛型

```typescript
interface IUser {
  name: string,
  email: string,
  password: string,
  token: string
}

let user: IUser = {name: "test", email: "test@test.com", password: "test", token: "test"}
```

### props

> 子组件拿到父组件的传参
>
> - 子组件通过接收父组件的传参可以在当前页面使用
> - 使用`defineProps`接收父组件的参数

`poop.vue`

```vue
<script>
import {defineProps} from 'vue'
let obj = defineProps(['en', 'zh', 'list'])
</script>

<template>
  <h2>{{ en }}</h2>
  <h2>{{ zh }}</h2>
  <div style="font-size: 25px">
    <ul v-for=" (i,index) in list " :key="index">
      <h4>{{ index }}</h4>
      <li v-for="j in i ">{{ j }}</li>
    </ul>
  </div>
</template>
```

`app.vue`

```vue
<script>
import poop from './components/poop.vue'
interface IUser {
  name: string,
  email: string,
  password: string,
  token: string
}

let userList: Array<IUser> = [
  {name: "test", email: "test@test.com", password: "test", token: "test"},
  {name: "qin", email: "qin@qin.com", password: "qin", token: "qin"}
]
</script>

<template>
  <poop zh="zh-CN" en="en-US" :list="userList"/>
</template>
```



高级用法

`poop.vue`

```vue
<script>
import {defineProps} from 'vue'
import type {IUser} from "@/types";
interface IProps {
  en: string;
  zh: string;
  list: () => IUser[];
}

let obj = defineProps({
  en: String,
  zh: String,
  list: Array as () => IUser[]
});
</script>
<template>
  <h2>{{ en }}</h2>
  <h2>{{ zh }}</h2>
  <div style="font-size: 25px">
    <ul v-for=" (i,index) in list " :key="index">
      <h4>{{ index }}</h4>
      <li v-for="j in i ">{{ j }}</li>
    </ul>
  </div>
</template>
```

### 生命周期

**vue2的生命周期**

- 创建
  `beforeCreate()`、`created()` 当创建完毕，数据已经读取完成

- 挂载
  `beforeMount()`、`mounted()`  当挂载完毕，页面已经成功渲染

- 更新
  `beforeUpdate()`、`updated() `当更新完毕，页面已经成功更新

- 销毁

  `beforeDestory`、`destoryed()`当销毁完毕，页面已经成功销毁



**vue3的生命周期**

- 创建
  `setup()` 函数包含了创建及创建完毕

- 挂载
  `onBeforeMount()`、` onMounted()` 它们 接收一个回调函数

- 更新

  `onBeforeUpdate()`、`onUpdated()` 它们 接收一个回调函数

- 卸载
  `onBeforeUnmount()`、`onUnmounted()` 它们 接收一个回调函数

> 父组件 与 子组件 在挂载时 ，子组件会先于父组件挂载

### hooks