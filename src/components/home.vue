<template>
    <div>
        <h1>home</h1>
        <p>{{ store.a }}</p>
        <el-button @click="store.a++">++</el-button>
        <el-button>
            <router-link to="/about">button</router-link>
        </el-button>
    </div>
</template>


<script lang="ts" setup>
import {useIndexStore} from "@/store";

const store:any = useIndexStore()

</script>

<style scoped>

</style>