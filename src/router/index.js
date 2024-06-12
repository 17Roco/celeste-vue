import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '/',
        redirect: '/article',
        component: ()=>import('@/components/home.vue'),
    },{
        path: '/test',
        component: ()=>import('@/components/frame'),
        children:[{ path:'index',component:() => import('@/views/test') }]
    },

    {
        path: '/article',
        component: ()=>import('@/components/frame'),
        redirect: '/article/new',
        children:[
            { path:'new',component:() => import('@/views/articleListView') },
            { path:'detail/:id',component:() => import('@/views/articleView') ,props:true},
            { path:'tag/:tag',component:() => import('@/views/articleListView') },
            { path:'editor/:id',component:() => import('@/views/editorView') },
        ]
    },{
        path: '/user',
        component: ()=>import('@/components/frame'),
        // redirect: '/user/new',
        children:[
            { path:'home/:id',component:() => import('@/views/userHomeView') },
            { path:'setting',component:() => import('@/views/articleView') ,props:true},
            { path:'article',component:() => import('@/views/articleListView') },
        ]
    },



    { path:'/editor',component:() => import('@/views/editorView') },
    { path: '/*', component: ()=>import('@/components/about.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router