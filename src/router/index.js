import {createRouter, createWebHashHistory} from "vue-router";

import frame from "@/components/frame"

import articleListView from "@/views/articleListView";
import articleView from "@/views/articleView"
import editorView from '@/views/editorView'

import userHomeView from'@/views/userHomeView'
import userSettingView from'@/views/userSettingView'
import articleManagerView from'@/views/articleManagerView'


const routes = [
    {
        path: '/',
        redirect: '/blog',
    }, {
        path: '/blog',
        redirect: '/blog/list',
        component: frame,
        children:[
            { path:'list',component:articleListView ,props: (route)=>({...route.query})},
            { path:'detail/:aid',component:articleView ,props:true},
            { path:'editor/:aid?',component:editorView,props:true,},
        ]
    },{
        path: '/user',
        redirect: '/user/home',
        component:frame,
        children:[
            { path:'home',component:userHomeView },
            { path:'setting',component:userSettingView ,props:true},
            { path:'articles',component:articleManagerView },
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