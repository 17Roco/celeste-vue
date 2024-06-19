<template>
    <div class="com-setting-group">
        <h2>用户信息</h2>
        <el-form label-width="120px">
            <el-form-item label="头像">
                <el-upload>
                    <el-avatar :src="store.user.img" size="large"/>
                </el-upload>
            </el-form-item >
            <el-form-item label="用户名">
                <el-input v-model="userInfo.username"/>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="userInfo.sex">
                    <el-radio value='1' size="large">男</el-radio>
                    <el-radio value='0' size="large">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="userInfo.email"/>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="userInfo.phone"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" :disabled="!changed" v-loading="loading">修改</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import {useUserStore} from "@/store/user";
import {reactive,computed,ref} from "vue";
import {ElMessage} from "element-plus";

const store = useUserStore();
let userInfo = reactive({...store.user});
let loading = ref(false)

let changed = computed(()=>{
    if (store.user.username!==userInfo.username)return true
    if (store.user.sex!==userInfo.sex)return true
    if (store.user.email!==userInfo.email)return true
    if (store.user.phone!==userInfo.phone)return true
    return false
})

let onSubmit = () => {
    loading.value = true
    store.update(userInfo).then(data => {
        loading.value = false
        ElMessage("信息更新成功")
    })
}
let reset = () => {
    Object.assign(userInfo,store.user)
}

</script>

<style>


</style>