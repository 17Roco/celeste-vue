import {defineStore} from "pinia";
import {getUserInfo, updateUserInfo} from "@/api/userApi";

let user =  {
    'uid':1,
    "username":"user",
    'sex':'1',
    "img":"https://pinia.vuejs.org/logo.svg",
    'email':'',
    'phone':'',
    "token":11
}


export const useUserStore = defineStore('user',{
    state: ()=> ({
        loginView:false,
        user: user,
        token:'',
        but:{
            publish:{title:"发表",path:'/user/edit'},
        }
    }),
    actions:{
        update(user){
            return updateUserInfo(user)
        },
        getUser(id){
            return getUserInfo(id)
        }
    }
})