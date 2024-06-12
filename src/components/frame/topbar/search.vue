<script setup>
import {ref} from "vue";
let input = ref("")
</script>

<template>
    <div class="com-search">
        <el-input v-model="input" style="width: 100%" placeholder="Please input" />
    </div>
</template>

<style>
.com-search{
    width: 900px;
}
</style>