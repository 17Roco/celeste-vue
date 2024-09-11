import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Frame from "@/components/frame/Frame.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
      path: '/home',
      redirect:'/home/index',
      component: Frame,
      children:[{
        path:'index',
        component:HomeView
      }]
    },{
      path: '/about',
      redirect:'/about/index',
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
      path: '/blog',
      redirect:'/blog/index',
      component: Frame,
      children:[{
        path:'index',
        component:()=>import("@/views/blog/BlogView.vue")
      },{
        path:'article/:aid',
        props:true,
        component:()=>import("@/views/blog/ArticleView.vue")
      },{
        path:'edit/:aid?',
        component:()=>import("@/views/blog/ArticleEditView.vue")
      }]
    },
    // /user/home
    // /user/setting
    {
      path: '/user',
      redirect:'/user/home',
      component: Frame,
      children:[{
        path:'home',
        component:()=>import("@/views/user/UserHomeView.vue")
      },{
        path:'setting',
        component:()=>import("@/views/user/UserSettingView.vue")
      },{
        path:':uid',
        component:()=>import("@/views/user/UserHomeView.vue")
      }]
    },















    {
      path:"/404",
      component:()=>import("@/views/NotFound.vue")
    },
    {
      path:"/:pathMatch(.*)*",
      redirect:'/404'
    }
    ]
})

export default router
