<template>
    <el-drawer v-model="store.loginView" direction="rtl">
        <template #header>
            <h4>set title by slot</h4>
        </template>
        <template #default>
            <div>dssgfdthytr</div>
        </template>
        <template #footer>
            <div style="flex: auto">
                <el-button>cancel</el-button>
                <el-button type="primary">confirm</el-button>
            </div>
        </template>
    </el-drawer>
</template>

<script setup>
import {useUserStore} from "@/store/user";

const store = useUserStore()


</script>

<style>

</style>