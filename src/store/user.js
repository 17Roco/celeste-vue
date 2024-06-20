import {defineStore} from "pinia";
import {getUserInfo, login, updateUserInfo} from "@/api/userApi";

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
        user: {token:null},
        // token:'',
        but:{
            publish:{title:"发表",path:'/user/edit'},
        }
    }),
    actions:{
        login(user){
            return login(user).then(data => {
                this.user.token = data
                localStorage.setItem("token", data)
            })
        },
        logout(){
            this.user.token = ''
            localStorage.removeItem("token")
        },
        update(user){
            return updateUserInfo(user)
        },
        getUser(id){
            return getUserInfo(id)
        }
    },
    getters:{
        token(state){
            if (!state.user.token || state.user.token===''){
                state.user.token = localStorage.getItem("token")
            }
            return state.user.token
        }
    }
})