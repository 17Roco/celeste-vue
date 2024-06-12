<template>
    <div class="view-editor">
        <el-input v-model="title"></el-input>
        <div style="border: 1px solid #ccc">
            <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
            />
            <Editor
                style="height: 500px; overflow-y: hidden;"
                v-model="valueHtml"
                :defaultConfig="editorConfig"
                @onCreated="handleCreated"
            />
        </div>
    </div>
</template>

<script setup>
import {ref,shallowRef,onBeforeUnmount} from "vue";
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const editorRef = shallowRef()
// 内容 HTML
const title = ref('')
const valueHtml = ref('<p>hello</p>')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})
const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}

</script>

<style>
.view-editor{
    width: 1400px;
    padding: 10px;
    .vuepress-markdown-body>*{
        text-align: left;
    }
}
</style>