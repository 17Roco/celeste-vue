import {defineStore} from "pinia";
import {reactive, ref, watchEffect} from "vue";
import {getSelfInfo, getUser, login, logout, register} from "@/api/userApi";
import {ElMessage} from "element-plus";

export const useMainStore = defineStore('main', () =>{
    // 菜单
    let menu = reactive({
        cur:'',
        models:[
            {'title':'Home','path':'/home','img':"https://pinia.vuejs.org/logo.svg"},
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
    let userStatus = reactive<LoginStatus>({
        loginMode:false,
        token:localStorage.getItem("token") || '',
        userInfo:null
    })
    // 获取当前用户信息
    let getSelfInfo = async() => {
        let r = await getUser()
        r.b || ElMessage("token 失效")
        r.b || (userStatus.token = null)
        return r.data
    }
    watchEffect(async ()=> {
        if (userStatus.token && userStatus.token !== ''){
            localStorage.setItem('token',userStatus.token)
            userStatus.userInfo = await getSelfInfo()
        }else {
            localStorage.removeItem('token')
            userStatus.userInfo = null
        }
    })

    return {
        menu, userStatus,
        getSelfInfo,
        getUser:async (uid?:number)=> (await getUser(uid)).data,
        login:async (form:LoginForm) => {
            let r = await login(form)
            r.b && (userStatus.token = r.data.token)
            return r
        },
        register:async (form:LoginForm)=> await register(form),
        logout:async ()=> {
            (await logout()).b ? userStatus.token = null : ElMessage("退出失败")
        }
    }
})
