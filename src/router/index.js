import {createRouter, createWebHashHistory} from "vue-router";

import frame from "@/components/frame"
import {useUserStore} from "@/store/user";


const routes = [
    {
        path: '/',
        redirect: '/blog',
    }, {
        path: '/blog',
        redirect: '/blog/list',
        component: frame,
        children:[
            { path:'list',component:() => import('@/views/articleListView') ,props: (route)=>({...route.query})},
            { path:'detail/:aid',component:() => import('@/views/articleView') ,props:true},
            { path:'editor/:aid?',component:() => import('@/views/editorView'),props:true,},
        ]
    },{
        path: '/user',
        redirect: '/user/home',
        component:frame,
        children:[
            { path:'home',component:() => import('@/views/userHomeView') },
            { path:'setting',component:() => import('@/views/userSettingView') ,props:true},
            { path:'articles',component:() => import('@/views/articleManagerView') },
        ]
    },
    { path: '/about',redirect: '/about/404', component: frame,
        children:[{ path:'/about',component:() => import('@/views/test')} ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router