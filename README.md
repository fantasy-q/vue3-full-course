# Vue 3 Tutorial - Full Course 10 Hours 10 apps

https://youtu.be/e-E0UB-YDRk
https://vue3-full-course.netlify.app
https://github.com/bitfumes/vue3-for-beginners
https://www.canva.com/design/DAEJRdAPBlc/oN2E4elZiFUbqAZJnFa2iQ/edit?catogory=tACZCu97tkM#2

## Content
- [Vue 3 Tutorial - Full Course 10 Hours 10 apps](#vue-3-tutorial---full-course-10-hours-10-apps)
  - [Content](#content)
  - [0. First Vue App](#0-first-vue-app)
    - [Vue Devtool and Vetur Extension](#vue-devtool-and-vetur-extension)
  - [1. DC Heros](#1-dc-heros)
    - [Vuex 4.0](#vuex-40)
    - [Custom Vue JS Middleware](#custom-vue-js-middleware)
  - [9. User Crud App](#9-user-crud-app)
    - [axios](#axios)
    - [Reqres](#reqres)
    - [crudcrud](#crudcrud)
    - [Environment File](#environment-file)

## 0. First Vue App

1. `$ vue --version`
- 返回 `@vue/cli 4.5.7` 说明已安装
- 否则 `npm i -g @vue/cli` 安装（更新）

2. `$ vue`
- 返回可用 Option 和 Commands
- Run `vue <command> --help` for detailed usage of given command.

3.`$ vue create <app-name>`
- 选择 vue3, 会创建一个 `<app-name>` 的文件夹
```
.
├── node_modules
│   └── ...
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   ├── App.vue
│   └── main.js
├── .gitignore
├── babel.config.js
├── package-lock.json
├── package.json
└── README.md
```

4. Get started with the following commands:
- `$ cd <app-name>`
- `$ npm run serve`
  - 运行 `package.json` 里的 `script.serve`

5. App running at:
- Local:   http://localhost:8080/
- Network: http://192.168.0.1:8080/

### Vue Devtool and Vetur Extension

1. 安装 [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg) (Chrome)

2. 安装 [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) (Vscode)

3. 右上角准星按钮 Click on a component on the page to select it

- TimeLine 鼠标, 键盘等事件
- Setting 主题色

4. 
- v-html
- v-text
- v-once

## 1. DC Heros
- v-bind
  
- 简写 `:`
  
- v-model
  - DOM 与 vueApp 中的 data 双向绑定
  - 可以用 Vue.js Devtools 查看

- v-on
  
- 简写 `@`
  
- filter
  - v-model
    - trim 去掉两边空格
    - lazy: 没有 focus 时才改变 data, 一般用在需要输入大量文本的地方，如 textarea
  - submit
    - prevent: 阻止默认事件

- computed & methods
  - 通过 randomComputed 和 randMethod 进行比较
  - computed 的属性会被缓存

- 使用 `npm install tailwindcss`
  - 创建配置文件
  - vue3 貌似有版本问题 [解决方案](https://github.com/tailwindlabs/tailwindcss/discussions/2854#discussioncomment-136611)

- ```js
  // src/main.js
  import "./assets/tailwind.css"
  ```

- 创建 `AppHeader.vue`, 即导航栏
  
  - tailwindcss Intelligence 在 vue 中不起效 [解决方法](https://github.com/tailwindlabs/tailwindcss-intellisense/issues/49#issuecomment-755161126)

## 2. Calendar

日历部分没什么好记的, 干脆结合之前看 CSS Mastery 第 9 章日历部分, 互相改进一下。

- `tailwind.config.js` 配置错了, 编译会出错
  - 不知怎么要删掉重新输入

### Vue Router

1. `npm install vue-router@next`
- Vue3 需要加 next

2. 配置相关文件
- Vue3 有一点改动 [文档](https://next.router.vuejs.org/guide/migration/)
- VSCode 选择相同元素 `Ctrl + D`

## 3. Markdown App
- `npm i marked`
  - 安装完成后要重新 `run serve`

- 防抖函数的使用
  - 在 textarea 输入时, 不要实时更新, 输入完再更新

### mixin
  - 创建 `utilities/mixin/debounce.js`
  - 利用混入, 让防抖函数变得可复用
  - 使用时需要 `import`, 并添加 `mixins:[ something ]`
  - 组件中的同名变量优先于混入变量

### Vue Virtual DOM
Virtual DOM vs. Browser DOM
- 直接操作 DOM 的代价很昂贵

### Vue3 Lifecycle

![Vue Lifecycle Hook](https://v3.cn.vuejs.org/images/lifecycle.svg)

## 4. Slider Carousel

- Vue `<transiton>`

- 使用 translateX 会出现滚动条 
  - 在 `<transiton>` 的父级 `<div>` 中使用 `overflow-hidden` 解决 

## 5. Login Modal App
- z-index 的使用

### $emit

### Firebase Authentication
- [Firebase Console](https://console.firebase.google.com/)
  - 创建新项目并命名
  - **Disable** Google Analytics for this project

- 使用 Authentication 
  - Sign-in method: Enable Email/Password
  - User: 创建账号

- Project Overview
  - Register app
  - Add Firebase SDK: 把内容复制到 App
  - 分别将内容复制到：`public/index.html`

- `npm install --save firebase`
  - 有多种引入 firebase 的方式，参考 [Docs](https://firebase.google.com/docs/web/setup?authuser=0#using-module-bundlers)
  - 这种方式记得 `import firebase from firebase/app`

- 如何使用 firebase 验证登入 (Docs-Build)[https://firebase.google.com/docs/auth/web/start?authuser=0#sign_in_existing_users]

- 获取当前登录用户 [Docs](https://firebase.google.com/docs/auth/web/manage-users?authuser=0#get_the_currently_signed-in_user)
  - `firebase.auth().onAuthStateChanged()` 箭头函数与声明函数

- 登出 [Docs](https://firebase.google.com/docs/auth/web/password-auth?authuser=0#next_steps)

- Login With Google [Docs](https://firebase.google.com/docs/auth/web/google-signin?authuser=0#handle_the_sign-in_flow_with_the_firebase_sdk)
  - 在 Signed-In Method 中 Enable Google

### Template refs
- 让文本输入区一开始就 focus 状态

### props
- 传递登录成功的消息
  - 使用绑定 v-bind:
- $emit 使用 v-on:

### Vue 3 Teleport
- [Vue 3 Teleport](https://v3.cn.vuejs.org/guide/teleport.html)
- `<teleport>` 标签的使用

### Vue 3 Composition API 
- [Vue 3 Composition API](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)
- setup() 的使用
  - `import { ref } from 'vue'`
    - 不使用 `this.foo` , `const foo = ref(bar)` 的变量，要通过 `foo.value` 调用值
  - 生命周期 `onMounted(()=>{ })`
  - 不需要使用 $refs, 直接通过定义变量
  - 使用 `onMounted` 帮我自动 import 了, 使用 `computed` 却没有

## 6. Calculator App
- `display: grid`
- Keyboard Event

## 7. Reusable Modal
- `pages/ReusableModal`
- `components/Modal`
  - 在 setup() 即 Composition API 中使用 emit

- Custom Composition Hook 
  - `utilities/composition/useWindowEvent.js`
  - 先在 `Calculator.vue` 中实验

### [slots](https://v3.cn.vuejs.org/guide/component-slots.html)
- Named Slot
  - `<slot name="foo"></slot>`
  - `<template v-slot:foo></template>`
  - `v-slot:` 简写为 `#`

## 8. Real Time Chat App

### Firebase Realtime Database
- [Docs](https://firebase.google.com/docs/database/web/start)
- 修改 [rule](https://firebase.google.com/docs/rules/basics#realtime-database)
- `import "firebase/database"`

- import & export
```js
export dbChat
export default firebase
`import firebase, { dbChat } from "../utilities/firebase";`
```
- js
  - async & await
  - ref & reactive

### Vuex 4.0
- 使用 Vue 3 + [Vuex 4.0](https://next.vuex.vuejs.org/)
  - `npm install vuex@next --save`
  - 类似 Vue-Router 需要 use
  - State Management System


### Custom Vue JS Middleware
- 实现进入页面须登录
  - 注意使用 this.$store 和 store 
- Navigation Guard
  - `route.js` 中添加 `beforeEnter`
- Route Meta Fileds


## 9. User Crud App
### axios
- [npm-axios](https://www.npmjs.com/package/axios)
- `npm i axios`

### Reqres
- [REQ | RES](https://reqres.in/)
- `axios.get("https://reqres.in/api/users")`

### crudcrud
- [{"crud":"crud"}](https://crudcrud.com/)
- `axios.post(https://crudcrud.com/api/b81c4578c4324ea599f779f4ceebf63a)`

### Environment File
- 创建 `.env`
- `VUE_APP_API_URL = https://reqres.in/api`
  - 需要重新 `run serve`
- `axios.defaults.baseURL = VUE_APP_API_URL`