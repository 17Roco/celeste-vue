<script setup lang="ts">

import {ref} from "vue";

let textarea = ref('')
</script>

<template>
    <div class="com-comment-input">
        <el-input
            v-model="textarea"
            style="width: 100%;font-size:18px;"
            :rows="4"
            type="textarea"
            placeholder="评论框"
            resize="none"
        />
        <div class="opt">
            <el-button type="primary" round>发表评论</el-button>
        </div>
    </div>
</template>

<style>

.com-comment-input{
    display: flex;
    flex-direction: column;

    >.opt{
        display: flex;
        justify-content: flex-end;
        padding: 10px;
    }
}

</style>