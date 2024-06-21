import {defineStore} from "pinia";
import {getUserInfo, login, logout, signup, updateUserInfo} from "@/api/userApi";
import {ElMessage} from "element-plus";
import res from "@babel/core/lib/config/validation/option-assertions";

let user =  {
    'uid':1,
    "username":"user",
    'sex':'1',
    "img":"https://pinia.vuejs.org/logo.svg",
    'email':'',
    'phone':'',
    "token":''
}


export const useUserStore = defineStore('user',{
    state: ()=> ({
        loginView:false,
        _user: null,
        _token:'',
    }),
    actions:{
        login(user){
            return login(user).then(data => {
                this._token = data
                localStorage.setItem("token", data)
                this.getUser(undefined)
            })
        },
        logout(){
            return logout().finally(()=>{
                ElMessage("用户退出")
                localStorage.removeItem("token")
                this._token = ''
                this._user = null
            })
        },
        signup(user){
            return signup(user).then(data => {
                ElMessage("注册成功")
            }).catch(data => {
                ElMessage("注册失败")
            })
        },
        update(user){
            return updateUserInfo(user)
        },
        getUser(id){
            return getUserInfo(id).then(data => {
                if (!id) this._user = data
                return data
            }).catch(()=>{})
        }
    },
    getters:{
        token(state){
            if (!state._token || state._token===''){
                state._token = localStorage.getItem("token")
            }
            return state._token
        },
        user(state){
            if (!state._user && state._token && state._token!=='')
                state.getUser(undefined)
            return state._user
        }
    }
})