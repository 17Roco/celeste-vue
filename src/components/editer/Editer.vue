<template>
    <div class="view-editor">
        <div class="top-bar">
            <!--修改标签-->
            <tag-edit :tags="article.tags" @changeTag="changeTag" v-if="aid"/>
            <div v-else></div>
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
import {addTags, deleteTag, saveArticle, updateArticle} from "@/api/blogApi";
import {ElMessage} from "element-plus";
import {useMainStore} from "@/stores/mainStore";
import router from "@/router";
import {NP} from "@/util/NP";

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

const editorRef = shallowRef()
const handleCreated = (editor) => {editorRef.value = editor}
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})




// 获取文章
onMounted( async ()=>{
    // aid 为 null
    if (!props.aid)
        return
    // 获取文章
    load.value = true
    let data = await store.getArticle(props.aid)
    if (!data) {
        // 不存在
        router.push("/home").then(()=>ElMessage("文章不存在"))
    }else if (data.user.uid !== (await mainStore.getSelfInfo())?.uid){
        // 其他用户的文章
        router.push("/home").then(()=> ElMessage("无权编辑其他用户文章"))
    }else {
        article.title=data.title
        article.context=data.context
        data.tags.forEach(t => article.tags.push(t))
        load.value = false
    }
})
let changeTag = async(b:boolean,tag:string)=>{
    let bb = b ? await addTags(props.aid, tag) : await deleteTag(props.aid, tag)
    if (bb){
        b ? article.tags.push(tag) : article.tags = article.tags.filter(t=>t!==tag)
        ElMessage(b ? "添加成功" : "删除成功")
    }else {
        ElMessage(b ? "添加失败" : "删除失败")
    }
}
let save = async () => {
    NP(async ()=>ElMessage(await updateArticle(article,props.aid) ? "保存成功" : "保存失败"))

}
let release = async () => {
    NP(async ()=> ElMessage(await saveArticle(article) ? "发布成功" : "发布失败"))
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