<template>
    <div class="view-editor">
        <div class="top-bar">
            <!--修改标签-->
            <tag-edit v-model="tags"/>
            <!--保存或发布-->
            <el-button type="warning" round v-if="aid" @click="save">保存</el-button>
            <el-button type="warning" round v-else @click="release">发布</el-button>
        </div>
        <!--   标题+编辑器     -->
        <el-input v-model="article.title" input-style="font-size: 2em;text-align:center;margin: 10px;" class="title-input"
            :disabled="load"  :placeholder="load ? '加载中':'请输入标题'"/>
        <div style="border: 1px solid #ccc">
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef"/>
            <Editor style="min-height: 600px" :defaultConfig="{ placeholder: '请输入内容...' }" v-model="article.context" @onCreated="handleCreated"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {shallowRef, onBeforeUnmount, onMounted, reactive, ref} from "vue";
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import TagEdit from "@/components/editer/TagEdit.vue";
import {useBlogStore} from "@/stores/blogStore";
import {getArticleContent, saveArticle, updateArticle} from "@/api/blogApi";
import {ElMessage} from "element-plus";

const store = useBlogStore()
const props = defineProps<{
    aid:number|null
}>()
let load = ref<boolean>(false)
let article = reactive<ChangedArticle>({
    title:"",
    context:"",
    tags:[]
})
let srcTags = []
let tags = ref<Array<string>>([])

const editorRef = shallowRef()
const handleCreated = (editor) => {editorRef.value = editor}
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})





onMounted( ()=>{
    if (!props.aid)
        return
    ElMessage("加载中")
    load.value = true
    getArticleContent(props.aid).then(data => {
        article.title=data.title
        article.context=data.context
        srcTags = data.tags
        tags.push(data.tags)
        ElMessage("加载成功")
        load.value = false
    })

})
let updateTagChange = ()=>{

}
let save = async () => {
    let data = await updateArticle(article,props.aid)
    console.log(data)
}
let release = async () => {
    let data = await saveArticle(article)
    console.log(data)
}



</script>

<style>
.view-editor{
    >.top-bar{
        width:100%;
        display: flex;
        justify-content: space-between;

        padding-bottom: 30px;
    }
    padding: 10px;
    .vuepress-markdown-body>*{
        text-align: left;
    }
}
</style>