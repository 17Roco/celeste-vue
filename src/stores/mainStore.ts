import {defineStore} from "pinia";
import {reactive, watchEffect} from "vue";
import * as api from "@/api/userApi";
import {ElMessage} from "element-plus";
import router from "@/router";

export const useMainStore = defineStore('main', () =>{
    // 菜单
    let menu = reactive({
        cur:'',
        models:[
            {'title':'Home','path':'/home','img':"/static/logo.png"},
            {'title':'BLog','path':'/blog','img':"/static/logo.png"},
            {'title':'About','path':'/about','img':"/static/logo.png"}
        ],
        userOpe:[
            {'title':'主页','path':'/user/home'},
            {'title':'关注/粉丝','path':'/user/follow'},
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
        let r = await api.getUser()
        userStatus.userInfo = r.data
        r.b || ElMessage("登录信息失效")
        r.b || (userStatus.token = null)
        return r.data
    }
    watchEffect(async ()=> {
        if (userStatus.token && userStatus.token !== ''){
            // 保存token
            localStorage.setItem('token',userStatus.token)
            userStatus.userInfo = await getSelfInfo()
        }else {
            // 清除token
            localStorage.removeItem('token')
            userStatus.userInfo = null
        }
    })

    return {
        menu,
        userStatus,
        getSelfInfo,

        // 用户登录
        login:async (form:LoginForm) => {
            let r = await api.login(form)
            // 保存token
            r.b && (userStatus.token = r.data.token)
            return r
        },
        // 用户注册
        register:async (form:LoginForm)=> {
            return (await api.register(form))
        },
        // 用户退出
        logout:async ()=> {
            // 调用接口
            await api.logout()
            // 清除token
            userStatus.token = null
            // 刷新页面
            router.go(0)
        },


        // 获取用户信息
        getUser:async (uid?:number)=> {
            return (await api.getUser(uid)).data
        },

        // 更新用户信息
        updateUserInfo:async (form:UserForm)=> {
            let b = (await api.updateInfo(form)).b
            b || await getSelfInfo()
            return b
        },
        // 上传头像
        updateImg:async (file)=> {
            let form = new FormData()
            form.append('file',file)
            let b = (await api.updateImg(form)).b
            b || await getSelfInfo()
            return b
        },




        // 关注/取消关注
        follow:async (uid:number,b:boolean)=> {
            return (b ? await api.follow(uid) : await api.unfollow(uid)).b
        },
        // 获取关注列表
        getFollowerList:async (uid:number|null,index?:number)=> {
            return (await api.getFollow(
                uid      || (await getSelfInfo()).uid,
                index || 1
            )).data
        }
    }
})
