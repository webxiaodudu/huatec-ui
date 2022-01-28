<template>
        <a :class="`
            huatec-btn 
            ${type} 
            ${shadow?'huatec-btn-shadow':''}
            ${round?'huatec-btn-round':''}
            ${circle?'huatec-btn-circle':''}
            ${isDisabled?'huatec-btn-disabled':''}
            ${isLoading?'huatec-btn-relative':''}
            `
        "

        @click="clickHandler" 
        >
            <huatec-icon v-if="isLoading" icon="huatec-16-gongneng2-changguizhuangtai" class="icon-load"></huatec-icon>
            <huatec-icon v-if="icon!==''&&!iconEnd&&!isLoading" :icon="icon"></huatec-icon>
            <span v-if="slots.default"><slot></slot></span>
            <huatec-icon v-if="icon!==''&&iconEnd&&!isLoading" :icon="icon"></huatec-icon>
        </a>
    
</template>

<script setup lang="ts">
import { useSlots } from "vue"
interface iPorps {
    type:'primary'|"success"|"danger"|"wrang"|"plain",
    shadow?:boolean,
    round?:boolean,
    circle?:boolean,
    icon?:string,
    isDisabled?:boolean,
    iconEnd?:boolean,
    isLoading?:boolean
}

const props =withDefaults(defineProps<iPorps>(),{
    type:'plain',
    shadow:false,
    round:false,
    icon:'',
    isDisabled:false,
    iconEnd:false,
    isLoading:false
})

const slots = useSlots();
console.log(slots.default,' ===slots')

const emit = defineEmits<{
    (e:'click',ev:MouseEvent):void
}>()

const clickHandler=(ev:MouseEvent)=>{
    emit('click',ev);
}

</script>

<style scoped>

.huatec-btn{
    display: inline-block;
    min-width:83px;
    height:32px;
    line-height:32px;
    cursor: pointer;
    border:1px solid var(--huatec-border-color);
    text-decoration: none;
    text-align: center;
    border-radius: 3px;
}
.huatec-btn:hover{
    opacity: 0.8;
}
.huatec-btn span{
    color:var(--huatec-font-blackcolor);
    font-family:var(--huatec-family);
    padding:0 3px;
    font-size:14px;
}

.huatec-btn.plain{
    background-color:#fff;
    border-color:var(--huatec-border-color);
}

.huatec-btn.primary{
    background-color:var(--huatec-blue-color);
    border-color:var(--huatec-primary-border-color);
}

.huatec-btn.primary span{
    color:#fff;
}


.huatec-btn.success{
    background-color:var(--huatec-sucess-color);
    border-color:var(--huatec-sucess-border-color)
}
.huatec-btn.success span{
    color:#fff;

}

.huatec-btn.danger{
    background-color:var(--huatec-danger-color);
     border-color:var(--huatec-danger-border-color)
}
.huatec-btn.danger span{
    color:#fff;
}

.huatec-btn.wraning{
    background-color:var(--huatec-wraning-color);
     border-color:var(--huatec-wraning-border-color);
}
.huatec-btn.wraning span{
    color:#fff;
}

.huatec-btn-shadow{
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
}

.huatec-btn-round{
    border-radius:20px;
}

.huatec-btn-circle{
    border-radius: 100%;
    width:40px;
    height:40px;
     min-width:40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.huatec-btn-disabled{
    opacity: 0.5;
    background:#ccc!important;
    border-color:#ccc!important;
    cursor: not-allowed;
}
.huatec-btn-disabled:hover{
  opacity: 0.5;
}

.huatec-btn-relative{
    position: relative;
     padding-left:10px;
}

@keyframes loadMove {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);;}
}
.icon-load{
    position: absolute;
    left:5px;
   
    top:1px;
    animation-name: loadMove;
    animation-duration: 1s;
    animation-iteration-count: infinite;
     animation-fill-mode: forwards;
     animation-timing-function: linear;

}
</style>