const template = '<div><h1>{{ hi }}</h1></div>';

const data = function data() {
  return {
    hi: 'Hello, Vue 3',
    title: 'Vue3 Tutorial 1',
    name: "Vue"
  }
};

const app = { template, data }
Vue.createApp(app).mount('#vue-container')

console.log('Vue', typeof Vue, Vue);
