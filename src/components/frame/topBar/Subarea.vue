<template>
    <div class="com-subarea">
        <el-menu
            :default-active="route.matched[0].path"
            :router="true"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
            class="menu"
            background-color="rgba(0,0,0,0)"
            router
            active-text-color="#00965e">
            <el-menu-item v-for="sub in store.menu.models" :key="sub.path" :index="sub.path">
                <img v-if="sub.img" :src="sub.img" alt="" width="20px" style="margin-right: 10px"/>
                {{ sub.title }}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup>

import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/mainStore.ts";

const store = useMainStore()
const route = useRoute();

const handleSelect = ()=>{}

</script>

<style>
@media (max-width: 576px) {
    .com-subarea{
        display: none;
    }
}
</style>