<template>
    <div class="com-tag-show">
        <el-tag v-for="tag in tags" :key="tag" round type="primary" effect="dark" class="tag">
            <router-link :to="{path:'/blog/index', query:{tag}}" class="tag-link">{{tag}}</router-link>
        </el-tag>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    tags:Array<string>
}>()

//
</script>

<style>
.com-tag-show {
    >.tag{
        margin: 0 10px;
        a{
            color: white;
        }
    }
}
</style>