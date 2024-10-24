import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Frame from "@/components/frame/Frame.vue";
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', redirect:'/home'},
    {
      path: '/home', redirect:'/home/index',
      component: Frame,
      children:[{
        path:'index',
        component:HomeView
      }]
    },{
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
        props:route => ({aid:parseInt(route.params.aid)}),
        component:()=>import("@/views/blog/ArticleView.vue")
      },{
        path:'edit/:aid?',
        props:route => ({aid: route.params.aid ? parseInt(route.params.aid) : null}),
        component:()=>import("@/views/blog/ArticleEditView.vue")
      }]
    },
    // /user/home
    // /user/manager
    // /user/setting
    {
      path: '/user',
      redirect:'/user/home',
      component: Frame,
      children:[{
        path:'home',
        component:()=>import("@/views/user/UserHomeView.vue")
      },{
        path:'manager',
        component:()=>import("@/views/user/ArticleManagerView.vue")
      },{
        path:'setting',
        component:()=>import("@/views/user/UserSettingView.vue")
      },{
        path:':uid',
        props:route => ({uid:parseInt(route.params.uid)}),
        component:()=>import("@/views/user/UserHomeView.vue")
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
