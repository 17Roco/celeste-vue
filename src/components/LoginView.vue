<template>
    <el-drawer v-model="store.loginView" direction="rtl" class="com-login-view">
        <el-tabs v-model="tab" @tab-change="console.log(tab)">
            <!--    登录页面        -->
            <el-tab-pane label="登陆" name="login" class="form-view">
                <el-form :model="form" label-width="auto" style="max-width: 400px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.username" />
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" type="password"/>
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
                        <el-input v-model="form.username" />
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

<script setup>
import {useUserStore} from "@/store/user";
import {ref,reactive} from "vue";
import {ElMessage} from "element-plus";

const store = useUserStore()

let tab = ref('login')
let form  = reactive({
    username:'',
    password:''
})
let pw = ref('')

let login = () => {
    if (!form.username || form.username ===''){
        ElMessage('请输入用户名')
    }else if (!form.password || form.password ===''){
        ElMessage('请输入密码')
    }else {
        store.login(form).then(data=>{
            store.loginView = false
        })
    }
}
let signup = () => {
    if (!form.username || form.username ===''){
        ElMessage('请输入用户名')
    }else if (!form.password || form.password ===''){
        ElMessage('请输入密码')
    }else if (!pw || pw.value ===''){
        ElMessage('请再次输入密码')
    }else if (form.password !== pw.value){
        ElMessage('两次输入的密码不一致')
    }else {
        store.signup(form).then(data=>{

        })
    }
}

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