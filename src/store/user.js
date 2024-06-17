import {defineStore} from "pinia";
import {updateUserInfo} from "@/api/userApi";

let user =  {
    'uid':1,
    "username":"user",
    'sex':'1',
    "img":"https://pinia.vuejs.org/logo.svg",
}


export const useUserStore = defineStore('user',{
    state: ()=> ({
        user: user,
        token:'',
        but:{
            publish:{title:"发表",path:'/user/edit'},
        }
    }),
    actions:{
        update(){
            return updateUserInfo(this.user)
        }
    }
})