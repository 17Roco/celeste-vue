<template>
    <div class="com-subarea">
        <el-menu :default-active="check" mode="horizontal" :ellipsis="false" @select="handleSelect" class="menu" background-color="rgba(0,0,0,0)" router active-text-color="#00965e">
            <el-sub-menu index="/article" @click="$router.push('/article/new')">
                <template #title><span style="font-size: 16px;font-weight: bold">博客</span></template>
                <el-sub-menu index="/tag">
                    <template #title>标签</template>
                    <tags :tags="store.tag"/>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
import tags from './tags.vue'
import {ref} from "vue";
import {useArticleStore} from "@/store/article";

let check = ref("/article")
const store = useArticleStore();

let handleSelect = () =>{}
let fun = (index) =>{
    console.log(index.indexPath)
}
</script>

<style>
.com-subarea{

}
</style>