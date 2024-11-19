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
        <div style="display:flex" CLASS="top-bar">
            <!-- 文章封面 -->
            <el-image
                style="width:160px;height: 90px;border-radius: 5px;margin-right: 10px;margin-bottom: 10px"
                v-if="article.img"
                :src="article.img"
                :preview-src-list="[article.img]"
            />
            <div v-else></div>
            <!-- 上传图片 -->
            <ImageUpload @update="updateImg">
                <el-button type="warning" round>{{article.img? '修改封面' : '上传封面'}}</el-button>
            </ImageUpload>
        </div>
        <!--   标题+编辑器     -->
        <el-input v-model="article.title" input-style="font-size: 2em;text-align:center;margin: 10px;" class="title-input"
            :disabled="load"  :placeholder="load ? '加载中':'请输入标题'"/>
        <div class="editor">
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef"/>
            <Editor :defaultConfig="{ placeholder: '请输入内容...',autoFocus: true }" v-model="article.context" @onCreated="handleCreated"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, reactive, ref, shallowRef, watchEffect} from "vue";
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'
import TagEdit from "@/components/editer/TagEdit.vue";
import {useBlogStore} from "@/stores/blogStore";
import {ElMessage} from "element-plus";
import {useMainStore} from "@/stores/mainStore";
import router from "@/router";
import {NP} from "@/util/NP";
import {Plus} from "@element-plus/icons-vue";
import type {UploadRawFile} from "element-plus/lib/components";
import ImageUpload from "@/components/common/ImageUpload.vue";

const store = useBlogStore()
const mainStore = useMainStore()
const props = defineProps<{
    aid?:number
}>()

let load = ref<boolean>(false)
let article = reactive<ArticleForm>({
    title:"",
    context:"",
    tags:[],
    img:""
})

const editorRef = shallowRef()
const handleCreated = (editor) => {editorRef.value = editor}
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})




// 获取文章
watchEffect( async ()=>{
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
        article.img=data.img
        data.tags.forEach(t => article.tags.push(t))
        load.value = false
    }
})
let changeTag = async(b:boolean,tag:string)=>{
    let bb = b ? await store.addTag(props.aid, tag) : await store.deleteTag(props.aid, tag)
    if (bb){
        b ? article.tags.push(tag) : article.tags = article.tags.filter(t=>t!==tag)
        ElMessage(b ? "添加成功" : "删除成功")
    }else {
        ElMessage(b ? "添加失败" : "删除失败")
    }
}
let save = async () => {
    NP(async ()=>ElMessage(await store.updateArticle(article,props.aid) ? "保存成功" : "保存失败"))

}
let release = async () => {
    NP(async ()=> {
        let res = await store.saveArticle(article)
        if (res.b){
            // todo 返回结果不一致
            router.push("/blog/edit/" + res.data.aid.aid).then(()=>ElMessage("发布成功"))
        }else {
            ElMessage("发布失败")
        }
    })
}


// 更新头像
let updateImg = async (file:UploadRawFile)=> {
    let r = (await store.updateArticleImg(props.aid, file))
    if(r.b)
        article.img = r.data.img
    ElMessage(r.b ? '更新成功' : '更新失败')
}

</script>

<style>
.view-editor{
    flex: 1;
    display: flex;
    flex-direction: column;
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
    .editor{
        flex: 1;
        border: 1px solid #ccc
    }
}
</style>