import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";

export const useMainStore = defineStore('main', () => {

    const menu = reactive({
        cur:'',
        models:[
            {'title':'Home','path':'/home','img':"https://pinia.vuejs.org/logo.svg"},
            {'title':'BLog','path':'/blog','img':"https://pinia.vuejs.org/logo.svg"},
            {'title':'About','path':'/about','img':"https://pinia.vuejs.org/logo.svg"}
        ],
        userOpe:[
            {'title':'Home','path':'/user/home'},
            {'title':'Setting','path':'/user/setting'}
        ]
    })

    const user = reactive({
        isLogin:true,
        loginMode:false,
        uid:1,
        token:'',
        userInfo:{
            img:"https://pinia.vuejs.org/logo.svg"
        },
        login:()=>{},
        logout:()=>{},
    })

    const filter = reactive({
        tags:['tag_1','tag_2','tag_3','tag_4','tag_5','tag_6','tag_7','tag_8','tag_9','tag_10','tag_11','tag_12'],
        order:["最新","高赞","高浏览量"]
    })

    return {
        menu,user,filter
    }
})
