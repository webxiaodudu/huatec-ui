<template>
        <div class="header">
                <h1 class="logo" @click="goIndex">
                        <img src="@/assets/logo.png" height="50" />
                </h1>
        </div>
        <Layout></Layout>

</template>

<script setup lang="ts">
import Layout from '@/components/layout/src/index.vue'
import { useRouter } from 'vue-router';
const router =  useRouter();

const goIndex = ()=>{
        router.push({path:'/'})
}
</script>

<style scoped>
.header{
        height:55px;
        border-bottom:1px solid var(--el-border-color-base);
        padding:10px 30px;
        display: flex;
        align-items: center;
        background:#fff;
        position: fixed;
        left:0;
        top:0;
        right:0;
        z-index:1000;
}
.logo{
      
      height:50px;
      cursor: pointer;
}
.title{
        color:#333;
        font-size:16px;
        font-weight: bold;
}
</style>