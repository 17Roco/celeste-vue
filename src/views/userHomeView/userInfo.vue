<template>
    <div class="com-user-info">
        <div class="info">
            <el-avatar :size="70" :src="store.user.img"/>
            <div class="info-text">
                <h2>{{ store.user.username }}</h2>
                <p> 0 篇文章</p>
            </div>
        </div>
        <div class="opt">
            <el-button v-for="o in option">
                <router-link :to="o.path">{{ o.but }}</router-link>
            </el-button>
        </div>
    </div>
</template>

<script setup>
import {reactive} from 'vue'
import {useUserStore} from "@/store/user";

const store = useUserStore();
const props = defineProps(['user'])

let option = reactive([
    {"but":"设置","path":""},
    {"but":"设置","path":""},
    {"but":"设置","path":""},
])

</script>

<style lang="less">
.com-user-info{
    display: flex;
    // margin:0 60px;
    padding: 10px 80px;
    justify-content: space-between;
    border-bottom: #b7b7bc 1px solid;
    >.info{
        display: flex;
        align-items: center;
        padding-left: 70px;
        >.info-text{
            padding-left: 50px;
            >h2{
                margin-top: 0;
            }
            >p{
                color: #b7b7bc;
            }
        }
    }
    >.opt{
        display: flex;
        flex-direction: column;
        align-items: center;
        >button{
            margin-left: 10px;
            margin-bottom: 5px;
        }
    }
}

</style>