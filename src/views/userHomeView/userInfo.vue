<template>
    <div class="com-user-info" v-if="store.user">
        <div class="info">
            <el-avatar :size="70" :src="store.user.img"/>
            <div class="info-text">
                <h2>{{ store.user.username }}</h2>
                <p>
                    <span>{{ store.user.sex===1 ? "男" : "女"}}</span>
                    <span v-if="store.user.phone && store.user.phone!==''">{{ store.user.phone }}</span>
                    <span v-if="store.user.email && store.user.email!==''">{{ store.user.email }}</span>
                </p>
            </div>
        </div>
    </div>
    <div v-else>加载中</div>
</template>

<script setup>
import {useUserStore} from "@/store/user";
let store = useUserStore();

</script>

<style lang="less">
.com-user-info{
    display: flex;
    padding: 10px 80px;
    justify-content: space-between;
    border-bottom: #b7b7bc 1px solid;
    >.info{
        display: flex;
        align-items: center;
        padding-left: 70px;
        >.info-text{
            padding-left: 50px;
            >h2{
                margin-top: 0;
            }
            >p{
                color: #b7b7bc;
                >span{
                    padding: 0 5px;
                }
            }
        }
    }
}

</style>