import type {RouteLocationNormalized} from "vue-router";
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Frame from '@/components/frame/Frame.vue'

import NProgress from 'nprogress';

let getToken = () => localStorage.getItem("token");
let enterNeedLogin = (to:RouteLocationNormalized,form:RouteLocationNormalized)=>{
  if (!getToken())
    return {path:"/"}
  return true
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', redirect:'/home'},
    // home
    {
      path: '/home', redirect:'/home/index',
      component: Frame,
      children:[{
        path:'index',
        component:HomeView
      }]
    },
    // about
    {
      path: '/about', redirect:'/about/index',
      component: Frame,
      children:[{
        path:'index',
        component:()=>import("@/views/AboutView.vue")
      }]
    },


    // /blog/index
    // /blog/article/:aid
    // /blog/edit/aid?
    {
      path: '/blog', redirect:'/blog/index',
      component: Frame,
      children:[{
        path:'index',
        component:()=>import("@/views/blog/BlogView.vue")
      },{
        path:'article/:aid',
        props:route => ({aid:parseInt(route.params.aid as string)}),
        component:()=>import("@/views/blog/ArticleView.vue")
      },{
        path:'edit/:aid?',
        beforeEnter:enterNeedLogin,
        props:route => ({aid: route.params.aid ? parseInt(route.params.aid as string) : undefined}),
        component:()=>import("@/views/blog/ArticleEditView.vue")
      }]
    },

    // /user/home
    // /user/follow/:uid?
    // /user/manager
    // /user/setting
    // /user/:uid
    {
      path: '/user',
      redirect:'/user/home',
      component: Frame,
      children:[{
        path:'home',
        beforeEnter:enterNeedLogin,
        component:()=>import("@/views/user/UserHomeView.vue")
      },{
        path:'follow/:uid?',
        beforeEnter:enterNeedLogin,
        props:route => ({
          uid: route.params.uid ?parseInt(route.params.uid as string) :undefined,
          index: route.query.p ? parseInt(route.query.p as string) : undefined// todo
        }),
        component:()=>import("@/views/user/UserFollowView.vue")
      },{
        path:'manager',
        beforeEnter:enterNeedLogin,
        component:()=>import("@/views/user/ArticleManagerView.vue")
      },{
        path:'setting',
        beforeEnter:enterNeedLogin,
        component:()=>import("@/views/user/UserSettingView.vue")
      },{
        path:':uid',
        props:route => ({uid:parseInt(route.params.uid as string)}),
        component:()=>import("@/views/user/UserHomeView.vue")
      }]
    },












    {
      path:"/dev",
      component:Frame,
      redirect:'/dev/index',
      children:[{
        path:'index',
        component:()=>import("@/views/dev/DevView.vue")
      }]
    },
    {
      path:"/404",
      component:()=>import("@/views/NotFound.vue")
    }, {
      path:"/:pathMatch(.*)*",
      redirect:'/404'
    }],
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
  NProgress.done()
})

export default router
