<script setup lang="ts">

import {useMainStore} from "@/stores/mainStore";
import {onMounted, ref} from "vue";
import {getUser} from "@/api/userApi";
import UserInfoShow from "@/components/userHome/UserInfoShow.vue";
import UserShowItem from "@/components/userHome/UserShowItem.vue";

const store = useMainStore()
const props = defineProps<{
    uid: number
}>()

let userInfo = ref<UserInfo|null>()
onMounted(async ()=>{
    userInfo.value = await store.getUser(props.uid)
    console.log(userInfo.value)
})

</script>

<template>
    <div class="com-user-home" v-if="userInfo">
        <user-info-show :userInfo="userInfo"/>
        <user-show-item title="文章"/>
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