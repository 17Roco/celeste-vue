<script setup lang="ts">

import {onMounted, onUnmounted, ref} from "vue";
import Router from "@/router";

let number = ref(5)
let interval = -1

onMounted(()=>{
    interval = setInterval(()=>{
        number.value--
        if (number.value === 0) {
            Router.push("/")
            clearInterval(interval)
        }
    },1000)
})

onUnmounted(()=>{
    clearInterval(interval)
})
</script>

<template>
    <div class="com-404">
        <h1 style="text-align:center;;font-size: 60px;font-weight: bolder">4 0 4</h1>
        <h2 style="text-align:center;">{{ number }}</h2>
        <el-button round>
            <router-link to="/">返回首页</router-link>
        </el-button>
    </div>
</template>

<style>
.com-404{
    margin: 40vh auto;
    width: 500px;
    padding: 50px;
    border-radius: 20px;
    background: antiquewhite;

    display: flex;
    flex-direction: column;
}
</style>