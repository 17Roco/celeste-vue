<template>
    <div>
        <h1>about</h1>
        <p>{{ store.a }}</p>
        <el-button @click="store.a++">++</el-button>
        <el-button>
            <router-link to="/">button</router-link>
        </el-button>
    </div>
</template>


<script setup>
import {useIndexStore} from "@/store";

const store = useIndexStore()

</script>

<style scoped>

</style>