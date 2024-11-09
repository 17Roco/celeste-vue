<script setup lang="ts">

import {useMainStore} from "@/stores/mainStore";
import {onMounted, ref, watchEffect} from "vue";
import UserInfoShow from "@/components/userHome/UserInfoShow.vue";
import UserShowItem from "@/components/userHome/UserArticleShow.vue";

const store = useMainStore()
const props = defineProps<{
    uid?: number
}>()
let userInfo = ref<UserInfo|null>()
watchEffect(async ()=>{
    userInfo.value = await store.getUser(props.uid)
})

</script>

<template>
    <div class="com-user-home" v-if="userInfo">
        <user-info-show v-model="userInfo"/>
        <user-show-item :uid="uid"/>
    </div>
    <div v-else>
        <p>加载中...</p>
    </div>
</template>

<style>
.com-user-home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}
</style>