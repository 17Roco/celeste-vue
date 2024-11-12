<script setup lang="ts">
import {Close} from '@element-plus/icons-vue'
import {inject, ref} from "vue";

const emit = defineEmits<{
    (event: "comment",text: string): void
}>()

let text = ref('')
let replyId = inject<number|null>("replyId")

let comment = ()=>{
    if (text.value.trim() === '')return
    emit('comment', text.value)
    text.value = ''
}

</script>

<template>
    <div class="com-comment-input">
        <el-input
            v-model="text"
            style="width: 100%;font-size:18px;"
            :rows="4"
            type="textarea"
            placeholder="评论框"
            resize="none"
        />
        <div class="opt">
            <el-button-group v-show="replyId !== null">
                <el-button type="primary" round @click="comment">回复</el-button>
                <el-button type="primary" round @click="replyId = null"><el-icon><Close /></el-icon></el-button>
            </el-button-group>
            <el-button v-show="replyId === null" type="primary" round @click="comment">发表评论</el-button>
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