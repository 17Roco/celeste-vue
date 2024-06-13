<template>
    <div class="view-user-setting">
        <div class="setting">

        </div>
    </div>
</template>

<script setup>

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
        width: 600px;
        background: saddlebrown;
        display: flex;
        flex-direction: column;
    }
}
</style>