<template>
    <div class="view-test">
        <p>{{ f.index }}</p>
    </div>
</template>

<script setup>
import {reactive} from "vue";
import {createArticleFilter} from '@/api/articleApi'

let f = reactive({
    index:1,
    // timeRange:undefined
})

</script>

<style>
.view-test{
    padding: 100px;
    background: #7f7171;
}
</style>