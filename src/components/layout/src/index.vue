<template>
    <div class="layout">
    <el-container>
        <el-aside :class="`${!isCollapse?'asideWid':''}`"  width="auto">
            <el-menu
                class="el-menu-vertical-demo"
                :default-active="keyIndex"
                :collapse="isCollapse"
                @select="selectMenu"
            >
                <el-menu-item v-for="(item,index) in data" :index="index+''">
                    <component :is="item.icon" class="icon-menu"></component>
                    <span>{{item.label}}</span>
                </el-menu-item>
            </el-menu>
  </el-aside>
        <el-container>
            <el-header>
                <div class="head-box">
                    <expand class="head-icon" v-if="isCollapse" @click="toggleCollapse" />
                    <fold class="head-icon" v-if="!isCollapse" @click="toggleCollapse"/>
                </div>
                
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
    </div>
</template>

<script setup lang="ts">
import {Promotion,Expand,Fold, Burger} from '@element-plus/icons-vue'
import { ref,ComponentOptionsMixin ,computed} from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Imenu{
    url:string,
    label:string,
    icon:ComponentOptionsMixin
}

const router = useRouter();
const route = useRoute()

const isCollapse = ref<Boolean>(false)

const data = ref<Imenu[]>([
    {
        url:'/icon',
        label:'ICON組件',
        icon:Promotion
    },
    {
        url:'/button',
        label:'Button組件',
       icon:Burger
    }
])

const keyIndex = computed(()=>{
    return data.value.findIndex(item=>item.url==route.path)+''
})

const toggleCollapse = ()=>{
    isCollapse.value=!isCollapse.value
}

const selectMenu=(index:number,keyPath:string[])=>{
    console.log(index,' ==index')
   
    router.push({
        path:data.value[index].url
    })
}
</script>

<style lang="scss" scoped>
.layout{
    margin-top:80px;
}
.icon-menu{
    width:20px;
    height:20px;
    
}
.head-icon{
    width:25px;
    height:25px;
    cursor:pointer;
}
.head-box{
    display: flex;
    justify-items: start;
    align-items: center;
    height:100%;
    border-bottom:1px solid #DCDFE6
}
.asideWid{
    width:200px;
}
</style>