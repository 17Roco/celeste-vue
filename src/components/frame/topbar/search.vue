<template>
    <div class="com-search">
        <el-input v-model="input" style="width: 100%" placeholder="搜索" @keydown.enter="search"/>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useArticleStore} from "@/store/article";
import router from "@/router";

const store = useArticleStore()
let input = ref("")

let search = () => {
    if (input.value !== "") {
        store.filter.search = input.value
        router.push("/blog")
    }
}

</script>

<style>
.com-search{
    width: 900px;
}
</style>