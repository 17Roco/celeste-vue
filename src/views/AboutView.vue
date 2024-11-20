<script setup lang="ts">

import {reactive} from "vue";

let todoList = reactive<any>([
    {
        label: "已完成",
        items: [
            "用户模块","博客模块","评论模块","图片上传","文章管理","文章筛选"
        ]
    },
    {
        label: "计划添加",
        items: [
            "搜索功能","后台管理","图标优化","文章嵌入图片","关注用户更新","邮箱注册","验证码"
        ]
    },


])
</script>

<template>
    <div class="view-about">
        <h1>About</h1>
        <div class="todo-list">
            <div>
                <h2>Todo List</h2>
            </div>
            <div class="todo-item">
                <div v-for="item in todoList" :key="item.label">
                    <h3>{{item.label}}</h3>
                    <div class="item" v-for="todo in item.items" :key="todo">
                        <el-tag class="tag" size="large" effect="dark" round>{{todo}}</el-tag>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.view-about {
    h1,h2{
        text-align: center;
    }

    width: 100%;
    >.todo-list{
        > .todo-item{
            display: flex;
            justify-content: space-around;
            .item{
                flex: 1;
                .tag{
                    margin: 10px;
                }
            }
        }
    }
}
</style>