<template>
    <div class="com-frame">
        <top-bar/>
        <div class="com-frame-body"><router-view/></div>
    </div>
</template>


<script setup>
import topBar from './topbar'

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
    /**/
    background: white;
    border-radius: 10px;
    border: 1px solid #b7b7bc;

}
</style>