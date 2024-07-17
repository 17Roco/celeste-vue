<template>
    <div class="com-bottom-bar">
        <div class="body" v-if="user">
            <div class="user-info">
                <el-avatar :src="user.img" size="default"/>
                <span style="margin-right: 30px">{{ user.username }}</span>
<!--                <el-button>关注</el-button>-->
            </div>
            <div class="opt">
                <el-button>点赞</el-button>
<!--                <el-button>评论</el-button>-->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {useUserStore} from "@/store/user";
import {watch,ref,onMounted} from "vue";

const store:any = useUserStore()
const props:any = defineProps(["uid"])
let user = ref(null)

onMounted(()=>{
    store.getUser(props.uid).then(data => {
        user.value = data;
    })
})
</script>

<style>
.com-bottom-bar{
    position: fixed;
    width: 1400px;
    left: 50%;
    margin-left: -701px;
    bottom: 0;
    display: flex;
    justify-content: center;
    border: 1px #b7b7bc solid;
    border-bottom: 0;
    border-radius:15px 15px 0 0;
    background: #e9ecef;
    >.body{
        width: 1000px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        >.user-info{
            display: flex;
            align-items: center;
        }
    }
}
</style>