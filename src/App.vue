<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
    <RouterView />
</template>

<style>

body{
    margin: 0;
    padding: 0;
}


a {
    text-decoration: none;
    color: #181818;
    transition: 0.4s;
    padding: 3px;
}


:root{
    --frame-padding:30px;/* frame body 内边距 */
    --frame-padding-:-30px;
    --frame-border-color:#b7b7bc; /* frame 边框颜色 */
}
@media (min-width: 1200px) {
    :root{
        --frame-padding:50px;
        --frame-padding-:-50px
    }
}
@media (max-width: 900px) {
    :root{
        --frame-padding:10px;
        --frame-padding-:-10px
    }
}
</style>
