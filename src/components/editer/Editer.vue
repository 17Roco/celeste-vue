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
import {useMainStore} from "@/stores/mainStore";
import router from "@/router";

const store = useBlogStore()
const mainStore = useMainStore()
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
let tags = reactive<Array<string>>([])

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
        if (data.aid !== mainStore.userInfo?.uid){
            router.push("/home").then(()=>ElMessage("无权编辑其他用户文章"))
            return
        }
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
    ElMessage("保存中...")
    let data = await updateArticle(article,props.aid)
    ElMessage("保存成功")
}
let release = async () => {
    ElMessage("发布中...")
    let data = await saveArticle(article)
    ElMessage("发布成功")
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