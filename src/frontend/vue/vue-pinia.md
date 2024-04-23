---
title: 状态管理pinia
icon: vue
order: 3
category: vue
tag:
  - pinia

date: 2024-04-23
---

::: tip Pinia


> 集中式状态管理

:::

安装

```shell
npm i pinia
```

`main.ts`

```typescript
import {createApp} from 'vue'
import App from './App.vue'
// 第一步：引入pinia
import {createPinia} from 'pinia'

const app = createApp(App)
// 第二步：创建pinia
const pinia = createPinia()
// 第三步：安装pinia
app.use(pinia)
app.mount('#app')
```

`Count.vue`

```vue
<template>
    <h2>{{ countStore.sum }}</h2>
</template>

<script setup lang="ts" name="Count">
  import { ref,reactive } from "vue";
  import {useCountStore} from '@/store/count'

  const countStore = useCountStore()
</script>

```

### 操作`pinia`的数据

- 直接修改数据
- `$patch({})`  传入一个对象，改变对应的变量
- `actions` 定义的函数进行修改

### storeToRefs

> 拿到`store`中的属性的ref对象

```vue
<template>
    <h2>{{ countStore.sum }}</h2>
</template>

<script setup lang="ts" name="Count">
  import { ref,reactive } from "vue";
  import {useCountStore} from '@/store/count'

  const countStore = useCountStore()
  let {sum,sss} = storeToRefs(countStore)
</script>

```

### getters



### $subscribe

