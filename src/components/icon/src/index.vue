<template>
   <span class="iconfont" :class="icon" @click="clickHandler"></span>
</template>

<script setup lang="ts">
    const props = withDefaults(defineProps<{
        icon:string
    }>(),{
        icon:'huatec-huanfu1'
    })

    const emit = defineEmits<{
        (e:'click',ev:MouseEvent):void
    }>()
    const clickHandler=(e:MouseEvent)=>{
        emit('click',e)
    }
</script>

<style scoped>
@import url(iconfont.css);
</style>