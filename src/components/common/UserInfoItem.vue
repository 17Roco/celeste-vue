<script setup lang="ts">

import {useMainStore} from "@/stores/mainStore";
import SwitchButton from "@/components/common/SwitchButton.vue";

const store = useMainStore();
defineProps<{user:UserInfo}>()
defineEmits<{change:(isFollow:boolean)=>void}>()

</script>

<template>
    <div class="com-user-info-item" v-if="user.uid !== store.userStatus?.userInfo?.uid">
        <div class="info">
            <!-- 头像 -->
            <router-link :to="'/user/' + user.uid">
                <el-avatar :src="user.img" size="default"/>
            </router-link>
            <!-- 昵称 -->
            <router-link :to="'/user/' + user.uid" class="username-span">
                <span style="margin-right: 30px">{{ user.username }}</span>
            </router-link>
        </div>
        <!-- 关注按钮 -->
        <switch-button :is="user.isFollow" :label="['取消关注', '关注']" @change="$emit('change', $event as boolean)"/>
    </div>
</template>

<style>

.com-user-info-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #a9a9a9;
    width: 400px;
    padding: 0 40px;

    >.info{
        display: flex;
        align-items: center;
        justify-content: space-between;

        >.username-span{
            padding-left: 20px;
        }
    }
}
</style>