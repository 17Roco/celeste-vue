<script setup lang="ts">
import {useMainStore} from "@/stores/mainStore";
import FollowButton from "@/components/common/FollowButton.vue";

const store = useMainStore()
const userInfo = defineModel<UserInfo>()

</script>

<template>
    <div class="com-user-info-show" style="background:url('/bkg7.png');background-size: 100%">
        <div class="info">
            <el-avatar :src="userInfo.img" size="large" class="img-avatar"/>
            <p>
                {{ userInfo.username }}

                <follow-button v-model="userInfo">
                    <el-button>编辑</el-button>
                </follow-button>
            </p>
        </div>
        <div class="info">
            <span>关注：{{ userInfo.follow }} | 粉丝：{{ userInfo.follower }} | 文章：{{ userInfo.article }}</span>
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