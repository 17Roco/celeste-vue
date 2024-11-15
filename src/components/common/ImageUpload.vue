<script setup lang="ts">
import {Plus} from "@element-plus/icons-vue";
import {ElMessage, ElUpload} from "element-plus";
import {ref} from "vue";

const emit = defineEmits<{(e:'update',file:UploadRawFile):void}>()
let uploading = ref<boolean>(false)


// 验证文件格式和大小
const beforeUpload = (rawFile:UploadRawFile) => {
    if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png' && rawFile.type !== 'image/webp') {
        ElMessage.error('不支持该格式')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('文件大小不能超过2M')
        return false
    }
    return true
}

// 更新头像
let updateAvatar = async (file:UploadRawFile)=> {
    // 验证文件格式和大小
    if (!beforeUpload(file))
        return
    // 上传头像
    uploading.value = true
    emit('update',file)
    uploading.value = false
}



</script>

<template>
    <el-upload
        :limit='1'
        :before-upload="updateAvatar"
        :http-request="()=>{}"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        auto-upload :show-file-list="false"
        :disabled="uploading"
    >
        <slot/>
        <div style="display: flex;justify-content: end;height: 100%"><el-button circle><el-icon><Plus/></el-icon></el-button></div>
    </el-upload>
</template>

<style scoped>

</style>