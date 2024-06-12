import {defineStore} from "pinia";
import {user} from "@/store/art_data";

export const useUserStore = defineStore('user',{
    state: ()=> ({
        user: user,
    })
})