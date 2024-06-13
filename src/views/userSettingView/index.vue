<template>
    <div class="view-user-setting">
        <div class="setting">
            <setting-group/>
        </div>
    </div>
</template>

<script setup>
import SettingGroup from "@/views/userSettingView/settingGroup.vue";
import {useRoute} from "vue-router";

const route = useRoute()

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