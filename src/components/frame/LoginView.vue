<template>
    <el-drawer v-model="store.userStatus.loginMode" direction="rtl" class="com-login-view">
        <el-tabs v-model="tab">
            <!--    登录页面        -->
            <el-tab-pane label="登陆" name="login" class="form-view">
                <el-form :model="form" label-width="auto" style="max-width: 400px">
                    <el-form-item label="用户名">
                        <el-input
                            v-model="form.username"
                            ref="input-un"
                            @keyup.enter="enterUn"
                            @keyup.down="toPw"
                        />
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input
                            v-model="form.password"
                            type="password"
                            ref="input-pw"
                            @keyup.enter="enterPw"
                            @keyup.up="toUn"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login" style="margin-left: 100px">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <!--     注册页面       -->
            <el-tab-pane label="注册" name="signup" class="form-view">
                <el-form :model="form" label-width="auto" style="max-width: 400px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.username"/>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" type="password"/>
                    </el-form-item>
                    <el-form-item label="再次输入密码">
                        <el-input v-model="pw" type="password"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="signup" style="margin-left: 100px">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </el-drawer>
</template>

<script setup lang="ts">
import {useMainStore} from "@/stores/mainStore.ts";
import {ref, reactive, useTemplateRef} from "vue";
import {ElMessage} from "element-plus";

const store = useMainStore()

let tab = ref<string>('login')
let form  = reactive<LoginForm>({
    username:'',
    password:''
})
let pw = ref<string>('')

let login = async () => {
    if (!form.username || form.username ===''){
        ElMessage('请输入用户名')
    }else if (!form.password || form.password ===''){
        ElMessage('请输入密码')
    }else {
        let r = await store.login(form)
        ElMessage(r.b ? "登录成功" : ("登录失败:" + r.msg))
        r.b || (form.password = '')
        store.userStatus.loginMode = !(r.b)
    }
}
let signup = async () => {
    if (!form.username || form.username ===''){
        ElMessage('请输入用户名')
    }else if (!form.password || form.password ===''){
        ElMessage('请输入密码')
    }else if (!pw || pw.value ===''){
        ElMessage('请再次输入密码')
    }else if (form.password !== pw.value){
        ElMessage('两次输入的密码不一致')
    }else {
        ElMessage({message:"注册..."})
        await store.register(form)
    }
}

let inputUn = useTemplateRef<HTMLElement>("input-un")
let inputPw = useTemplateRef<HTMLElement>("input-pw")
let toUn = () => inputUn.value?.focus()
let toPw = () => inputPw.value?.focus()
let enterUn = () => form.username.length > 0 && toPw()
let enterPw = () => form.password.length > 0 && login()
</script>

<style>
.com-login-view{
    .form-view{
        display: flex;
        justify-content: center;
        padding-top: 50px;
    }
}
</style>