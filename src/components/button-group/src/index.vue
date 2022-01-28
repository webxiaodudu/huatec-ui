<template>
    <div class="huatec-button-group">
        <slot style="margin-right:-3px;"></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style>

.huatec-button-group  a.huatec-btn{
     border-radius:0;
    min-width: auto;
    padding:0 10px;  
}

.huatec-button-group  a.huatec-btn:first-child{
     border-top-left-radius: 5px;
     border-bottom-left-radius: 5px;
        
}
.huatec-button-group a.huatec-btn:last-child{
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
</style>