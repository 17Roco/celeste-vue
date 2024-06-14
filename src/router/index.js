import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '/',
        redirect: '/blog',
    }, {
        path: '/blog',
        redirect: '/blog/list',
        component: ()=>import('@/components/frame'),
        children:[
            { path:'list',component:() => import('@/views/articleListView') },
            { path:'detail/:id',component:() => import('@/views/articleView') ,props:true},
            { path:'editor/:id?',component:() => import('@/views/editorView'),props:true},
        ]
    },{
        path: '/user',
        redirect: '/user/home',
        component: ()=>import('@/components/frame'),
        children:[
            { path:'home/:id?',component:() => import('@/views/userHomeView') ,props: true},
            { path:'setting',component:() => import('@/views/userSettingView') ,props:true},
            { path:'articles',component:() => import('@/views/articleManagerView') },
        ]
    },
    { path: '/about',redirect: '/about/404', component: ()=>import('@/components/frame'),
        children:[{ path:'/about',component:() => import('@/views/test')} ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router