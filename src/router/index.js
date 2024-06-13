import {createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '/',
        redirect: '/article',
    }, {
        path: '/article',
        redirect: '/article/new',
        component: ()=>import('@/components/frame'),
        children:[
            { path:'detail/:id',component:() => import('@/views/articleView') ,props:true},
            { path:'editor/:aid',component:() => import('@/views/editorView'),props:true},
            // params: tag,order,beginTime,endTime
            { path:':index(\\d+)?',component:() => import('@/views/articleListView'),props:route=>({...route.query,...route.params }) },
        ]
    },{
        path: '/user',
        component: ()=>import('@/components/frame'),
        // redirect: '/user/new',
        children:[
            { path:'home/:id',component:() => import('@/views/userHomeView') },
            { path:'setting',component:() => import('@/views/userSettingView') ,props:true},
            { path:'articles',component:() => import('@/views/articleManagerView') },
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