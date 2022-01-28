<template>
    <div>
        <div class="icon-box" >
            <ul>
                <li v-for="(icon,index) in list" :key="index" @click="copy('huatec-'+icon.font_class)" :title="`点击复制${'portal-'+icon.lable}`">
                <huatec-icon  :icon="'huatec-'+icon.font_class"></huatec-icon>
                <p>{{icon.name}}</p>
                <p>{{'huatec-'+icon.font_class}}</p>
                </li>
            </ul>
            <input ref="input" style='opacity: 0;' type="text" value="">
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {ElMessage } from 'element-plus'
import json from'./iconfont.json';

const list = ref(json.glyphs)
const input = ref()

const copy=(name:string)=>{
      const oInput = input.value
      oInput.value=name
      oInput.select();
      document.execCommand("Copy");
      ElMessage({
            message: '复制成功！',
            type: 'success',
          })
    }


</script>

<style scoped>
ul{
  margin:0;
  padding:0;
  font-size: 0;
  overflow: hidden;
}
li{
  width:100px;
  height:100px;
  font-size:36px;
  float:left;
  list-style:none;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left:10px;
}
li:hover{
  color:red;
}
.icon-box{
  text-align: center;
}
.icon-box p{
  font-size:12px;
  margin:0;
}
:deep(.iconfont){
  font-size: 30px;
  color:#ccc;
}
</style>