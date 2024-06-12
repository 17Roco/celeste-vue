import {defineStore} from "pinia";


export const useIndexStore = defineStore('index',{
    state: () => ({
        a: 1,
        b:2
    }),
    actions:{

    }
});
