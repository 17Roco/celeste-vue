<template>
    <div class="com-subarea">
        <el-menu :default-active="route.path" :router="true" mode="horizontal" :ellipsis="false" @select="handleSelect" class="menu" background-color="rgba(0,0,0,0)" router active-text-color="#00965e">
            <el-menu-item v-for="sub in store.sub" :key="sub.path" :index="sub.path">
<!--                <router-link :to="sub.path">{{ sub.name }}</router-link>-->
                {{ sub.name }}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup>
import {usePathStore} from "@/store/path";
import {useRoute} from "vue-router";

const store = usePathStore()
const route = useRoute();

const handleSelect = ()=>{}
</script>

<style>
.com-subarea{

}
</style>