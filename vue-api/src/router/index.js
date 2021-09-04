import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import store from "../store"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { guest: true }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { guest: true }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { secure: true }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.secure)) {
    //if no token
    if(! store.state.loggedIn){
      next({
        path:'/login'
      })
    }else{
      next()
    }
  }else if (to.matched.some(record => record.meta.guest)){
    //if no token
    if(! store.state.loggedIn){
      next()
    }else{
      next({
        path:'/profile'
      })
    }
  }else{
    next()
  }
})
export default router;
