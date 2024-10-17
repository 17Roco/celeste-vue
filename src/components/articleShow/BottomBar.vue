<template>
    <div class="com-bottom-bar">
        <div class="body">
            <!-- 作者信息 -->
            <div class="user-info" v-if="user">
                <el-avatar :src="user.img" size="default"/>
                <span style="margin-right: 30px">{{ user.username }}</span>
                <el-button>关注</el-button>
            </div>
            <!-- 操作 -->
            <div class="opt">
                <el-button>点赞</el-button>
                <el-button>评论</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    user:UserInfo
}>()

</script>

<style>
.com-bottom-bar{
    position: fixed;
    left: 50%;
    bottom: 0;
    width: 1240px;
    margin-left: -620px;

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

@media (min-width: 1200px) {
    width: 1200px;
}
</style>