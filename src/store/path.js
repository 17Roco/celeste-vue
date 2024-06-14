import {defineStore} from "pinia";

export const usePathStore = defineStore('path',{
    state:()=>({
        sub:[
            {path:'/blog',name:'博客'},
            {path:'/about',name:'关于'}
        ],
        user:{
            img:[
                {title:'主页',path:'/user/home'},
                {title:'我的博客',path:'/user/articles'},
                {title:'账号设置',path:'/user/setting'},
            ],
            but:{
                title:'发表',
                path:'/blog/editor',
            }
        }
    })
})
