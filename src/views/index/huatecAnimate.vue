<template>
    <div class="canvase-box">
        <canvas id="ocavanse" ></canvas>
        <canvas style="" id="ocavanse2" ></canvas>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAnimate } from './useAnimate'
onMounted(()=>{
    useAnimate()
})
</script>

<style scoped>
.canvase-box{
    width:100%;
    height:100%;
}
canvas{
        background-color:#fff;
}
#ocavanse{
    display: none;
}
</style>