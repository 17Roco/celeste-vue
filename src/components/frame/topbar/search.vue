<template>
    <div class="com-search">
        <el-input v-model="input" style="width: 100%" placeholder="搜索" @keydown.enter="search"/>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useArticleStore} from "@/store/article";
import router from "@/router";
import {ElMessage} from "element-plus";

const store:any = useArticleStore()
let input = ref("")

let search = () => {
    if (input.value !== "") {
        // router.push({path:"/blog/list",query:{search:input.value}})
        ElMessage("搜索功能暂不可用")
        input.value = ""
    }
}

</script>

<style>
.com-search{
    width: 900px;
}
</style>