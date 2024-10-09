import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";
import {login, logout, register} from "@/api/userApi";
import {ElMessage} from "element-plus";

export const useMainStore = defineStore('main', () =>{

    let menu = reactive({
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
    let user = reactive({
        loginMode:false,
        uid:1,
        token:localStorage.getItem("token") || '',
        userInfo:{
            img:"https://pinia.vuejs.org/logo.svg"
        }
    })
    return {
        menu, user,
        login:async (form:LoginForm)=>{
            let token:Token = await login(form)
            user.token = token.token
            localStorage.setItem('token',token.token)
            return token;
        },
        logout:async ()=> {
            let b = await logout() === "ok";
            if (b) {
                user.token = ''
                localStorage.removeItem('token')
            }else
                ElMessage("退出失败")
            return b
        },
        register:async (form:LoginForm)=>{
            await register(form)
        }
    }
})
