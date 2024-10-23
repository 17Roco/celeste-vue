<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <div class="com-user-show-item">
        <p style="margin: 7px">{{ title }}</p>
        <div class="items">
            <div class="item" v-for="i in 4">{{ i }}</div>
        </div>
    </div>
</template>

<style>
.com-user-show-item{
    display: flex;
    flex-direction: column;
    justify-content: left;
    .items{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        border-top:1px black solid;
        .item{
            margin: 10px;
            flex: 1;
            min-width: 180px;
            max-width: 400px;
            height: 140px;
            border-radius: 10px;
            border: 2px solid #ccc;
        }
    }
}
</style>