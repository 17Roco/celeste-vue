<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'

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
    //color: hsla(160, 100%, 37%, 1);
    color: #181818;
    transition: 0.4s;
    padding: 3px;
}


:root{
    --frame-padding:30px;
    --frame-padding-:-30px;
    --frame-border-color:b7b7bc;
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
