<script setup lang="ts">
import router from "@/router";
import {inject} from "vue";
import {useMainStore} from "@/stores/mainStore";
import FollowButton from "@/components/common/button/FollowButton.vue";

defineProps<{userInfo: UserInfo}>()
const store = useMainStore()
let followOps = inject<() => void>("followOps")
</script>

<template>
    <div class="com-user-info-show" style="background:url('/bkg7.png');background-size: 100%">
        <div class="info">
            <el-avatar :src="userInfo.img" size="large" class="img-avatar"/>
            <p>
                {{ userInfo.username }}
                <!-- 关注按钮 todo -->
<!--                <el-button-->
<!--                    v-if="userInfo.uid!== store.self?.uid"-->
<!--                    @click="followOps"-->
<!--                >{{ userInfo.isFollow? "已关注" : "关注" }}</el-button>-->
                <follow-button :user="userInfo" @follow="b => followOps()"/>
                <el-button
                    v-else
                    @click="router.push('/user/setting')"
                >编辑</el-button>
            </p>
        </div>
        <div class="info">
            <span>关注：{{ userInfo.follow }} | 粉丝：{{ userInfo.followed }}</span>
        </div>
    </div>
</template>

<style>

.com-user-info-show{
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 2px var(--frame-border-color) solid;
    padding: var(--frame-padding);
    padding-top: 100px;
    padding-bottom: 20px;
    margin-top: var(--frame-padding-);
    margin-left: var(--frame-padding-);
    >.info{
        display: flex;
        margin-left: 30px;
        >.img-avatar{
            width: 90px;
            height: 90px;
            margin-top: 20px;
        }
        >p{
            padding-top: 40px;
            padding-left: 30px;
            font-size: 24px;
            font-weight: bold;
        }
    }
}
</style>