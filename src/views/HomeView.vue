<script setup lang="ts">

import {getArticleInfos} from "@/api/blogApi";

getArticleInfos(null).then((data)=>{
    console.log(data)
})
</script>

<template>
    <h1>home</h1>
</template>
