<script setup lang="ts">

import ArticleList from "@/components/articleList/ArticleList.vue";
import {useMainStore} from "@/stores/mainStore";
import {onMounted, ref} from "vue";
import {getUser} from "@/api/userApi";

const store = useMainStore()
const props = defineProps<{
    uid: number
}>()

let userInfo = ref<UserInfo|null>()
onMounted(async ()=>{
    userInfo.value = await getUser(props.uid)
})

</script>

<template>
    <div class="com-user-home">
        <div v-if="userInfo" class="user-info">
            <img :src="userInfo.img" alt=""/>
            <p>username : {{ userInfo.username }}</p>
        </div>
    </div>
</template>

<style>
.com-user-home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .user-info{
        width: 600px;
        >img{
            width: 90px;
        }
    }
}
</style>