import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {getSelfInfo, login, logout, register} from "@/api/userApi";

export const useMainStore = defineStore('main', () =>{
    // 菜单
    let menu = reactive({
        cur:'',
        models:[
            {'title':'Home','path':'/home','img':"/user.png"},
            {'title':'BLog','path':'/blog','img':"https://pinia.vuejs.org/logo.svg"},
            {'title':'About','path':'/about','img':"https://pinia.vuejs.org/logo.svg"}
        ],
        userOpe:[
            {'title':'主页','path':'/user/home'},
            {'title':'文章管理','path':'/user/manager'},
            {'title':'设置','path':'/user/setting'}
        ]
    })
    // 用户登录状态
    let user = reactive<LoginStatus>({
        loginMode:false,
        token:localStorage.getItem("token") || ''
    })

    // 设置token
    let setToken = (token:string|null)=>{
        if(token && token !== ''){
            user.token = token
            localStorage.setItem('token',token)
        }else {
            user.token = ''
            localStorage.removeItem('token')
        }
    }

    return {
        menu,
        user,
        login:async (form:LoginForm) => setToken((await login(form)).token),

        register:async (form:LoginForm)=> await register(form),

        getSelfInfo:async ():Promise<UserInfo|null> => (user.token && user.token !== '')? await getSelfInfo() : null,

        logout:async ()=> {
            await logout()
            setToken(null)
        }
    }
})
