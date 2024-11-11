<script setup lang="ts">
import {useMainStore} from "@/stores/mainStore";
import SwitchButton from "@/components/common/SwitchButton.vue";

const store = useMainStore();
defineProps<{
    user:UserInfo,
    followOpt?:boolean,
    avatar?:boolean,
    text?:boolean
}>()
defineEmits<{change:(isFollow:boolean)=>void}>()

</script>

<template>
    <div class="com-user-info-item" v-if="user.uid !== store.userStatus?.userInfo?.uid">
        <router-link :to="'/user/' + user.uid" class="info">
            <!-- 头像 -->
            <el-avatar v-if="avatar" :src="user.img"/>
            <!-- 昵称 -->
            <span v-if="text" style="margin-right: 30px" class="username-span">{{ user.username }}</span>
        </router-link>
        <slot>
            <!-- 关注按钮 -->
            <template v-if="followOpt">
                <switch-button :is="user.isFollow" :label="['取消关注', '关注']" @change="$emit('change', $event as boolean)"/>
            </template>
        </slot>
    </div>
</template>

<style>

.com-user-info-item{
    display: flex;
    align-items: center;
    justify-content: space-between;

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