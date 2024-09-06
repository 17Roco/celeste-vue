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
      path: '/blog',
      redirect:'/blog/index',
      component: Frame,
      children:[{
        path:'index',
        // component:()=>import("@/views/BlogView.vue")
        component:()=>import("@/components/articleList/ArticleList.vue")
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















    {
      path:"/404",
      component:()=>import("@/views/NotFind.vue")
    },
    {
      path:"/:pathMatch(.*)*",
      redirect:'/404'
    }
    ]
})

export default router
