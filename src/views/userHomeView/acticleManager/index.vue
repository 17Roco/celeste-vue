<template>
    <div class="com-article-manager">
        <filterBar @change="change"/>
    </div>
</template>

<script setup>
import filterBar from './filterBar.vue'

let change = (d)=>{
    console.log(d);
}
</script>

<style>

</style>