<template>
    <div class="index-content">
        <div class="header">
                    <h1 class="logo">
                            <img src="@/assets/logo.png" height="50" />
                    </h1>
                    <div class="right-box">
                        <div class="btn-wrap" @click="goComponent">
                            <huatec-icon icon="huatec-calculator" class="h-icon" />
                            <span class="btn-tex">组件概览</span>
                        </div>
                        <div class="btn-wrap" @click="goDoc">
                            <huatec-icon icon="huatec-bangzhu1" class="h-icon" />
                            <span  class="btn-tex">使用指南</span>
                        </div>
                    </div>
        </div>
        <div class="animate-box">
            <HuatecAnimate />
        </div>
        

    </div>
        
</template>

<script setup lang="ts">
import HuatecAnimate from './huatecAnimate.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const goComponent=()=>{
    router.push({path:'/icon'})
}

const goDoc = ()=>{
    location.href=''
}
</script>

<style scoped>
.logo{
    margin:0;
}
.index-content{
    overflow: hidden;
    
}
.header{
    padding:20px;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    display: flex;
    align-items: center;
}
.animate-box{
    height:calc(100vh - 58px );
}
.bottom-box{
    height:300px;
    display: flex;
    justify-content:space-around;
    
}
.right-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:58px;
}
.btn-wrap{
    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;
}

.h-icon{
    font-size:30px;
    color:var(--huatec-blue-color);

}
.btn-text{
    font-weight: bold;
    font-size:16px;
    font-family: var(--huatec-family);
    color:var(--huatec-font-blackcolor);

}
</style>