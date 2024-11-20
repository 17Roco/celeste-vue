<template>
    <el-drawer v-model="store.userStatus.loginMode" direction="rtl" class="com-login-view" size="375px">
        <el-tabs v-model="tab">
            <!--    登录页面        -->
            <el-tab-pane label="登陆" name="login" class="form-view">
                <Login :is-register="false"/>
            </el-tab-pane>
            <!--     注册页面       -->
            <el-tab-pane label="注册" name="signup" class="form-view">
                <Login :is-register="true"/>
            </el-tab-pane>
        </el-tabs>
    </el-drawer>
</template>

<script setup lang="ts">
import {useMainStore} from "@/stores/mainStore";
import {ref} from "vue";
import Login from "@/components/frame/loginView/Login.vue";

const store = useMainStore()
let tab = ref<string>('login')

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