<template>
    <router-view></router-view>
</template>

<script setup>
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;

}
/* 去除 <a> 标签的默认样式 */
a {
    text-decoration: none; /* 移除下划线 */
    color: inherit; /* 使用父元素的文本颜色 */
}
</style>
