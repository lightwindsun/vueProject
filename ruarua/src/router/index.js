import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "../components/HomePage.vue";
import LoginPage from "../LoginPage.vue";
import RegistrationPage from "../RegistrationPage.vue";
import FarmerPage from "../FarmerPage.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'/',
      name:'LoginPage',
      component:LoginPage
    },
    {
      path:'/register',
      name:'RegistrationPage',
      component:RegistrationPage
    },
    {
      path:'/farmer',
      name:'FarmerPage',
      component:FarmerPage
    }
  ]
})
