<template>
    <div class="com-search">
        <el-input v-model="input" style="width: 100%" placeholder="搜索" @keydown.enter="search"/>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {ElMessage} from "element-plus";

let input = ref("")

let search = () => {
    if (input.value !== "") {
        ElMessage("搜索功能暂不可用")
        input.value = ""
    }
}

</script>

<style>
.com-search{
    padding: 0 20px;
    width: 0;
    flex: 1;
}
</style>