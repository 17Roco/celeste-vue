<template>
    <div class="view-user-home">
        <user-info :user="store.user"/>
    </div>
</template>

<script setup>

import UserInfo from "@/views/userHomeView/userInfo.vue";
import {useUserStore} from "@/store/user";

const store = useUserStore();
</script>

<style>
.view-user-home{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
}
</style>