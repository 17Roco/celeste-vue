<template>
    <div class="view-user-home">
        <user-info :uid="props.uid"/>
    </div>
</template>

<script setup>
import UserInfo from "@/views/userHomeView/userInfo.vue";

const props = defineProps(['uid'])


</script>

<style>
.view-user-home{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
}
</style>