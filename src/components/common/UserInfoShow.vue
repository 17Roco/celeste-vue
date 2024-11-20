<script setup lang="ts">
import {useMainStore} from "@/stores/mainStore";
import FollowButton from "@/components/common/button/FollowButton.vue";
import {inject} from "vue";
import UserOpsButton from "@/components/common/button/UserOpsButton.vue";

const store = useMainStore();
defineProps<{
    user:UserInfo,
    followOpt?:boolean,
    avatar?:boolean,
    text?:boolean,
}>()

let updateFollow = inject<(uid:number, follow:boolean) => void>("updateFollow", () => {})

</script>

<template>
    <div class="com-user-info-item" v-if="!followOpt || user.uid !== store.self?.uid">
        <router-link :to="'/user/' + user.uid" class="info">
            <!-- 头像 -->
            <el-avatar v-if="avatar" :src="user.img"/>
            <!-- 信息 -->
            <div v-if="text" style="margin-right: 30px" class="text">
                <span>{{ user.username }}</span>
            </div>
        </router-link>
        <slot>
            <!-- 关注按钮 -->
            <template v-if="followOpt">
                <user-ops-button>
                    <follow-button :user="user" @follow="b => updateFollow(user.uid, b)"/>
                </user-ops-button>
            </template>
        </slot>
    </div>
</template>

<style>

.com-user-info-item{
    display: flex;
    align-items: center;
    justify-content: space-between;

    >.info{
        display: flex;
        align-items: center;
        justify-content: space-between;

        >.text{
            padding-left: 20px;
        }
    }
}

@media (max-width: 576px) {
    .com-user-info-item{
        >.info{
            display: block;
            > .text{
                padding-left: 0;
                > span{
                    display: none;
                }
            }
        }
    }
}

</style>