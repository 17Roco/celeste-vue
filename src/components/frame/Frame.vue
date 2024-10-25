<template>
    <div class="com-frame">
        <top-bar/>
        <div class="com-frame-body"><router-view/></div>
        <LoginView/>
    </div>
</template>


<script setup>
import topBar from './topBar/TopBar.vue'
import LoginView from "@/components/frame/loginView/LoginView.vue";

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
    padding: 30px;
    //width: 1100px;
    width: 90%;
    /**/
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
/**/
@media (min-width: 1200px) {
    .com-frame-body {
        width: 1100px;
        padding: 50px;
    }
}
@media (max-width: 900px) {
    .com-frame-body {
        padding: 10px;
    }
}
</style>