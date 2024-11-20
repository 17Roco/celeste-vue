<template>
    <div class="com-top-bar">
        <div class="top-bar-body">
            <subarea/>
            <Search/>
            <user/>
        </div>
    </div>
</template>

<script setup>
import Subarea from "./Subarea.vue";
import Search from "./Search.vue";
import User from "./UserMenu.vue";

</script>

<style>
.com-top-bar{
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    /**/
    background: #404040;
    /*border-bottom: 1px solid #b7b7bc;*/
    .top-bar-body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        max-width: 1400px;
    }
}
@media (min-width: 1200px) {
    .com-top-bar {
        .top-bar-body {
            padding: 0 80px;
            Width: 80%;
        }
    }
}


@media (max-width: 576px) {
    .com-top-bar {
        padding: 5px;
    }

}
</style>