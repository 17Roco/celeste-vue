<template>
    <div class="view-editor">
        <edit-info create-time="------------" update-time="--------------">
            <el-button>发表</el-button>
        </edit-info>
        <el-input v-model="article.title" placeholder="请输入标题" input-style="font-size: 2em;text-align:center;margin: 10px;" class="title-input"></el-input>
        <div style="border: 1px solid #ccc">
            <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
            />
            <Editor
                v-model="article.context"
                :defaultConfig="editorConfig"
                @onCreated="handleCreated"
            />
        </div>
    </div>
</template>

<script setup>
import {ref,reactive,shallowRef,onBeforeUnmount} from "vue";
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {useArticleStore} from "@/store/article";
import EditInfo from "@/views/editorView/editInfo.vue";

const store = useArticleStore()
const props = defineProps(['aid'])

const editorRef = shallowRef()
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 内容
let article = reactive({
    title:'',
    context:''
})
if (props.aid){
    store.getArticle(props.aid).then(data => {
        article.title = store.curArticle.title
        article.context = store.curArticle.context
    })
}



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

    padding: 10px;
    .vuepress-markdown-body>*{
        text-align: left;
    }
}
</style>