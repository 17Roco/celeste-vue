<template>
    <div class="com-subarea">
        <el-menu
            :default-active="route.matched[0].path"
            :router="true"
            mode="horizontal"
            :ellipsis="false"
            class="menu1"
            background-color="rgba(0,0,0,0)"
            router
            active-text-color="#00965e">
            <el-menu-item v-for="sub in store.menu.models" :key="sub.path" :index="sub.path">
                <img v-if="sub.img" :src="sub.img" alt="" width="20px" style="margin-right: 10px"/>
                {{ sub.title }}
            </el-menu-item>
        </el-menu>
        <el-dropdown placement="top-start" class="menu2" type="success">
            <div class="ico"><el-icon size="20px"><Memo /></el-icon></div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="sub in store.menu.models" :key="sub.path" >
                        <router-link :to="sub.path">
                            <img v-if="sub.img" :src="sub.img" alt="" width="20px" style="margin-right: 10px"/>
                            <span>{{ sub.title }}</span>
                        </router-link>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>

import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/mainStore";
import {Memo} from "@element-plus/icons-vue";

const store = useMainStore()
const route = useRoute();


</script>

<style>

.com-subarea{
    > .menu2{
        display: none;
        margin-left: 10px;
        transition: all 0.3s ease;
        > .ico{
            padding:10px;
            width: 20px;
            height: 20px;;
            border-radius: 25px;
            background: lightblue;
            color: white;
            transition: all 0.2s ease;
            box-shadow: 0 0 7px lightsteelblue;
        }
        >.ico:hover{
            background: #37abd5;
            box-shadow: 0 0 3px #37abd5;
        }
    }
}


@media (max-width: 576px) {
    .com-subarea{
        > .menu1{
            display: none;
        }
        > .menu2{
            display: block;
        }
    }
}

</style>