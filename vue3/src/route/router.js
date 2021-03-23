import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes';
import store from "../store/index";

const vueRouter = createRouter({
  history: createWebHistory(),
  routes,
})

vueRouter.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    console.log('router.js');
    const middleware = require(`../middleware/${to.meta.middleware}`)
    if (middleware) {
      middleware.default(next, store);
    } else {
      next();
    }
  } else {
    next();
  }
})

export default vueRouter;
