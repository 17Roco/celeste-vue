<script setup>

</script>

<template>
    <div class="view-test">
        <h1 v-for="i in 30">test {{ i }}</h1>
    </div>
</template>

<style>
.view-test{
    padding: 100px;
    background: #7f7171;
}
</style>