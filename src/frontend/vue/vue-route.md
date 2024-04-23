---
title: 路由router
icon: vue
order: 3
category: vue
tag:
  - router

date: 2024-04-23
---

### 路由

> 实现SPA应用的切换
>
> - `components` 放置一般组件 ，`pages`、`views`放置路由组件
> - 切换路由时，原组件只是 卸载 ，组件实例仍然存在，需要的时候重新 挂载

#### 简单实例

`router/index.ts`

```typescript

```

`main.ts`

```typescript

```

- router-link的写法
  字符串写法，对象写法

  ```vue
  <router-link to='/views'>views</router-link>
  <router-link :to={path:'/views'}>views</router-link>
  <router-link :to={name:'views'}>views</router-link>
  ```

#### 路由的工作模式

1. `history` 模式

   >- URL中不带`#`，项目上线时需要额外处理路径问题，否则`404`
   >
   > ```typescript
   >const router = createrRouter({
   >    history: createWebHistory()
   >})
   > ```
   >
   >- 需要`nginx`配置
   >
   > ```nginx
   >location / {
   >    root html;
   >    index index.html;
   >    try_files $url $url/ /index.html;
   >}
   > ```

2. `hash`模式

   >URL中带`#`，项目上线时不需要额外处理路径问题
   >
   >`SEO`优化较差
   >
   >```typescript
   >const router = createrRouter({
   >history: createWebHashHistory()
   >})
   >```

#### 路由命名

```typescript
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'view',
            path: '/view',
            component: () => import('@/pages/view.vue')
        }
    ]
})
```

#### 路由嵌套

> 在`children` 中添加 路由 ，子路由`path`不需要加 `/`

```typescript
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'view',
            path: '/view',
            component: () => import('@/pages/view.vue'),
            children: [
                {
                    name: 'detail',
                    path: 'detail',
                    component:  () => import('@/pages/Detail.vue')
                }
            ]
        }
    ]
})
```

#### 路由传参

##### query参数

原路由组件
写法一：

```vue
<router-link to='/view?key=value'></router-link>
```

写法二：

```vue
<router-link :to={
             	 name: view,
                 path: '/view',
                 query:{
					key: value
                 }
             }>
</router-link>
```

目标路由组件

```vue
<script>
import {useRoute} from 'vue-router'
const route = useRoute()
let data = toRef(route,'query')  <!-- 拿到key-value对象 -->
</script>
```

##### params参数

> 需要在`router/index.ts`声明占位符
>
> 可以参加 `? `表示可选路径参数
>
> ```typescript
> children: [
>  {
>      name: 'detail',
>      path: 'detail/:id/:title/:content?',  <!-- 可以参加 ? 表示可选路径参数 -->
>      component:  () => import('@/pages/Detail.vue')
>  }
> ]
> ```

```typescript
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'view',
            path: '/view',
            component: () => import('@/pages/view.vue'),
            children: [
                {
                    name: 'detail',
                    path: 'detail/:id/:title/:content?',  <!-- 可以参加 ? 表示可选路径参数 -->
                    component:  () => import('@/pages/Detail.vue')
                }
            ]
        }
    ]
})
```

原路由组件
写法一：

```vue
<router-link to='/view/1/java'></router-link>
```

写法二：

> `path: '/view'` 不支持的写法，仅能使用路由的别名
>
> `params`不能传递数组

```vue
<router-link :to={
             	 name: view,
                 params:{
					id: 1,
             		title: 'java'
                 }
             }>
</router-link>
```

目标路由组件

```vue
<script>
import {useRoute} from 'vue-router'
const route = useRoute()
let data = toRef(route,'params')  <!-- 拿到key-value对象 -->
</script>
```



#### 路由props配置

##### （一）配合`params`使用

> 需要配合`params`路径传参使用，将`params`参数作为`props`传给目标路由组件
>
> `props: true` 添加个参数

`router/index.ts`

```typescript
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'view',
            path: '/view',
            component: () => import('@/pages/view.vue'),
            children: [
                {
                    name: 'detail',
                    path: 'detail/:id/:title/:content?',  <!-- 可以参加 ? 表示可选路径参数 -->
                    component:  () => import('@/pages/Detail.vue'),
                    props: true
                }
            ]
        }
    ]
})
```

原组件中的`params`传参方式有 `to` 和`:to`两种方式，与上文一致

目标组件需要使用这些`props`参数

```vue
<template>
	<ul>
        <li>{{id}}</li>
        <li>{{title}}</li>
        <li>{{content}}</li>
    </ul>
</template>

<script>
	defineprops(['id','title','content'])
</script>
```

##### （二）配合`query`使用

> 需要配合`query`路径传参使用，将`query`参数作为`props`传给目标路由组件
>
> ```typescript
> props(route)
> return route.query 
> }
> ```
>
>

函数式的写法

```typescript
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'view',
            path: '/view',
            component: () => import('@/pages/view.vue'),
            children: [
                {
                    name: 'detail',
                    path: 'detail/:id/:title/:content?',  <!-- 可以参加 ? 表示可选路径参数 -->
                    component:  () => import('@/pages/Detail.vue'),
                    props(route){}
                        return route.query 
                    }
                }
            ]
        }
    ]
})
```

对象写法

```typescript
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'view',
            path: '/view',
            component: () => import('@/pages/view.vue'),
            children: [
                {
                    name: 'detail',
                    path: 'detail/:id/:title/:content?',  <!-- 可以参加 ? 表示可选路径参数 -->
                    component:  () => import('@/pages/Detail.vue'),
                    props: {
                        id: '1',
                        title: 'java',
                        content: ''
                    }
                }
            ]
        }
    ]
})
```

#### replace属性

> `replace` 是在当前浏览器的导航历史中直接覆盖上一个路由，这意味着浏览器无法返回上一个页面
>
> 路由默认是`push` ，不会覆盖上一个路由统一，可通过浏览器左上方的箭头进行切换

#### 编程式路由

> `router`对象进行操作路由
>
> 声明式路由使用 `router-view` 进行路由的跳转

字符串写法

 ```vue
<script>
	import {useRouter} from 'vue-router'
    const router = useRouter()
</script>

<template>
	<button @click='router.push("/news")'>前往</button>
</template>
 ```

`params` 对象写法

```vue
<script>
	import {useRouter} from 'vue-router'
    const router = useRouter()
</script>

<template>
	<button @click="router.push({
             	 name: view,
                 params:{
					id: 1,
             		title: 'java'
                 }
             })">
        前往
    </button>
</template>
```

`query `对象写法

```vue
<script>
	import {useRouter} from 'vue-router'
    const router = useRouter()
</script>

<template>
	<button @click="router.push({
             	 name: view,
                 path: '/view',
                 query:{
					id: 1,
             		title: 'java'
                 }
             })">
        前往
    </button>
</template>
```

#### 路由重定向

```typescript
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        }
    ]
})
```
