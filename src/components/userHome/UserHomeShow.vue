<script setup lang="ts">
import router from "@/router";
import {inject} from "vue";
import {useMainStore} from "@/stores/mainStore";
import FollowButton from "@/components/common/button/FollowButton.vue";
import UserOpsButton from "@/components/common/button/UserOpsButton.vue";

defineProps<{userInfo: UserInfo}>()
const store = useMainStore()
let updateFollow = inject<() => void>("updateFollow", () => {})
</script>

<template>
    <div class="com-user-home-show" style="background:url('/bkg7.jpg') center top no-repeat;">
        <!-- 用户信息 -->
        <div class="info">
            <el-avatar :src="userInfo.img" size="large" class="img-avatar"/>
            <p>
                {{ userInfo.username }}
                <user-ops-button>
                    <!-- 关注按钮 -->
                    <follow-button
                        :user="userInfo"
                        v-if="userInfo.uid !== store.self?.uid"
                        @follow="b => updateFollow(b)"
                    />
                    <!-- 编辑按钮 -->
                    <el-button
                        v-else
                        @click="router.push('/user/setting')"
                    >编辑</el-button>
                </user-ops-button>
            </p>
        </div>
        <!-- 关注数、粉丝数 -->
        <div class="info">
            <span>关注：{{ userInfo.follow }} | 粉丝：{{ userInfo.followed }}</span>
        </div>
    </div>
</template>

<style>

.com-user-home-show{
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