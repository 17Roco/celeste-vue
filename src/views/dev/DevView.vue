<script setup lang="ts">


import {PUT} from "@/api/request";
import type {UploadRequestOptions} from "element-plus";

let uploadFile = async (file: UploadRequestOptions)=> {
    const formData = new FormData();
    formData.append('file', file.file);
    console.log((await PUT('/dev/upload', formData)));
}

</script>

<template>
    <div>
        <h1>This is the Dev View</h1>
        <el-upload :http-request="uploadFile">
            <el-button type="primary">Upload</el-button>
        </el-upload>
    </div>
</template>

<style scoped>

</style>