/**
 * Created by wwm on 2016/10/1.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from '../views/home.vue'
import About from '../views/about.vue'

export default new Router({
  mode:'history',
  scrollBehavior:()=>({y:0}),
  routes:[
    {path:'/home',component:Home},
    {path:'/about',component:About},
    {path:'*',component:Home}
  ]
})
