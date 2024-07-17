<template>
    <div class="com-top-bar">
        <div class="top-bar-body">
            <subarea/>
            <Search/>
            <user/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Subarea from "@/components/frame/topbar/subarea.vue";
import Search from "@/components/frame/topbar/search.vue";
import User from "@/components/frame/topbar/user.vue";

</script>

<style>
.com-top-bar{
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    /**/
    background: white;
    border-bottom: 1px solid #b7b7bc;
    .top-bar-body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1600px;
        padding: 0 80px;
    }
}
</style>