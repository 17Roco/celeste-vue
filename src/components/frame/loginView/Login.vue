<script setup lang="ts">

import {reactive, ref, useTemplateRef} from "vue";
import {ElMessage} from "element-plus";
import {useMainStore} from "@/stores/mainStore";

const props = defineProps<{isRegister:boolean}>()
const store = useMainStore()

let form  = reactive<LoginForm>({
    username:'',
    password:''
})
let pw = ref<string>('')


let formNotEmpty = (isPw:boolean):boolean =>{
    // 登录信息不为空
    let r =
        (form.username ==='') ? '请输入用户名' :
        (form.password ==='') ? '请输入密码' :
        (isPw && pw.value ==='') ? '请再次输入密码' :
        (isPw && form.password !== pw.value) ? '两次输入的密码不一致' : null
    if (r) ElMessage(r)
    return r == null
}
let reset = () => {
    form.username = ''
    form.password = ''
    pw.value = ''
}
let login = async () => {
    if (!formNotEmpty(false))
        return
    // 登录
    let r = await store.login(form)
    ElMessage(r.b ? "登录成功" : ("登录失败:" + r.msg))
    // 登录后
    r.b ? reset() : (form.password = '')
    store.userStatus.loginMode = !(r.b)
}
let register = async () => {
    if (!formNotEmpty(true))
        return
    // 注册
    let r = await store.register(form)
    ElMessage(r.b ? "注册成功" : ("注册失败:" + r.msg))
    // 注册后
    r.b ? reset() : (pw.value = '')
    store.userStatus.loginMode = !(r.b)
}

let inputs = [
    useTemplateRef<HTMLElement>("input-un"),
    useTemplateRef<HTMLElement>("input-pw"),
    useTemplateRef<HTMLElement>("input-pw2")
]
let toDown = (num:number)=>{if(num>=0 && num<3) (inputs[num+1] ? inputs[num+1].value?.focus(): toDown(num+1))}
let toUp   = (num:number)=>{if(num>=0 && num<3) (inputs[num-1] ? inputs[num-1].value?.focus(): toUp(num-1))}
let nextFocus = (num:number,val:string)=> {
    if (num === 2)
        props.isRegister ? register() : login()
    else if (val !== "")
        inputs[num+1].value ? inputs[num+1].value?.focus() : nextFocus(num+1)

}
</script>

<template>
    <el-form :model="form" label-width="auto" style="max-width: 400px;transition: 1s">
        <el-form-item label="用户名">
            <el-input
                v-model="form.username"
                ref="input-un"
                @keyup.enter="nextFocus(0,form.username)"
                @keyup.down="toDown(0)"
            />
        </el-form-item>
        <el-form-item label="密码">
            <el-input
                v-model="form.password"
                ref="input-pw"
                type="password"
                @keyup.enter="nextFocus(1,form.password)"
                @keyup.up="toUp(1)"
                @keyup.down="toDown(1)"
            />
        </el-form-item>
        <el-form-item label="再次输入密码" v-if="isRegister">
            <el-input
                v-model="pw"
                ref="input-pw2"
                type="password"
                @keyup.enter="nextFocus(2,pw)"
                @keyup.up="toUp(2)"
            />
        </el-form-item>
        <el-form-item>
            <el-button
                round
                type="primary"
                size="large"
                @click="isRegister?register():login()" style="margin:10px 70px;padding: 0 60px">
                {{ isRegister ? '注册' : '登录' }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<style>
</style>