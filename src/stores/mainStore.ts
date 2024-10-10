import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";
import {getSelfInfo, login, logout, register} from "@/api/userApi";
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
    let user = reactive<LoginStatus>({
        loginMode:false,
        token:localStorage.getItem("token") || ''
    })
    let userInfo = ref<UserInfo|null>(null)

    let setToken = (token:string|null):void=>{
        if(token){
            user.token = token
            localStorage.setItem('token',token)
            loadInfo()
        }else {
            user.token = ''
            localStorage.removeItem('token')
        }
    }
    let loadInfo = async () => {
        userInfo.value = await getSelfInfo()
        if(!userInfo.value)
            setToken(null)
        return user.userInfo
    }
    return {
        menu, user,
        setToken,loadInfo,
        login:      async (form:LoginForm)=>{
            setToken((await login(form)).token)
            loadInfo()
        },
        logout:     async ()=> {
            let b = await logout() === "ok";
            b ? setToken(null) : ElMessage("退出失败")
            return b
        },
        register:   async (form:LoginForm)=>{
            return await register(form) === "ok";
        },

        userInfo:   computed(():UserInfo|null=>{
            if (!user.token)
                userInfo.value=null
            else if(!userInfo.value)
                loadInfo()
            return userInfo.value
        })
    }
})
