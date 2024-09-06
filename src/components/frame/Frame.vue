<template>
    <div class="com-frame">
        <top-bar/>
        <div class="com-frame-body"><router-view/></div>
        <LoginView/>
    </div>
</template>


<script setup>
import topBar from './TopBar.vue'
import LoginView from "@/components/frame/LoginView.vue";

</script>
<style>
.com-frame{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /**/
    background: #e9ecef;
}
.com-frame-body{
    margin-bottom: 30px;
    margin-top: 70px;
    padding: 50px;
    width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    /**/
    background: white;
    border-radius: 10px;
    border: 1px solid #b7b7bc;

}
</style>