<template>
    <div class="view-user-setting">
        <div class="setting">
            <user-info-setting/>
        </div>
    </div>
</template>

<script setup>
import UserInfoSetting from "@/views/userSettingView/UserInfoSetting.vue";



</script>

<style>
.view-user-setting{
    display: flex;
    justify-content: space-between;
    width: 950px;
    >.anchor{
        position: fixed;
        width: 200px;
    }
    >.setting{
        display: flex;
        flex-direction: column;
    }
}
</style>