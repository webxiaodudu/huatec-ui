<template>
    <div class="button-page">
        <el-card class="box-card">
            <template #header>
            <div>
                <span>基本按钮</span>
            </div>
            </template>
            <div class="box-wrap">
                <huatec-button type="plain">Plain</huatec-button>
                <huatec-button type="primary">Primary</huatec-button>
                <huatec-button type="success">Success</huatec-button>
                <huatec-button type="wraning">Wraning</huatec-button>
                <huatec-button type="danger">Danger</huatec-button>
                </div>
        </el-card>
        <el-card class="box-card">
            <template #header>
            <div>
                <span>投影按钮</span>
            </div>
            </template>
            <div class="box-wrap">
                <huatec-button type="plain" shadow>Plain</huatec-button>
                <huatec-button type="primary" shadow>Primary</huatec-button>
                <huatec-button type="success" shadow>Success</huatec-button>
                <huatec-button type="wraning" shadow>Wraning</huatec-button>
                <huatec-button type="danger" shadow>Danger</huatec-button>
                </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
            <div>
                <span>圆角按钮</span>
            </div>
            </template>
            <div class="box-wrap">
                <huatec-button type="plain" round>Plain</huatec-button>
                <huatec-button type="primary" round>Primary</huatec-button>
                <huatec-button type="success" round>Success</huatec-button>
                <huatec-button type="wraning" round>Wraning</huatec-button>
                <huatec-button type="danger" round>Danger</huatec-button>
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
            <div>
                <span>圆型按钮</span>
            </div>
            </template>
            <div class="box-wrap">
                <huatec-button type="plain" icon="huatec-3-mengcengduihuakuang-tishi" circle ></huatec-button>
                <huatec-button type="primary" icon="huatec-huanfu1" circle></huatec-button>
                <huatec-button type="success" icon="huatec-icon-test8" circle></huatec-button>
                <huatec-button type="wraning" icon="huatec-icon-test11" circle></huatec-button>
                <huatec-button type="danger" icon="huatec-icon-test25" circle></huatec-button>
            </div>
        </el-card>
        <el-card class="box-card">
            <template #header>
            <div>
                <span>禁用按钮</span>
            </div>
            </template>
            <div class="box-wrap">
                <huatec-button type="plain" isDisabled icon="huatec-3-mengcengduihuakuang-tishi">Plain</huatec-button>
                <huatec-button type="primary" isDisabled icon="huatec-huanfu1" >Primary</huatec-button>
                <huatec-button type="success" isDisabled icon="huatec-icon-test8" >Success</huatec-button>
                <huatec-button type="wraning" isDisabled icon="huatec-icon-test11" iconEnd >iconEnd图标后置</huatec-button>
                <huatec-button type="danger" isDisabled icon="huatec-icon-test25" iconEnd >图标后置</huatec-button>
            </div>
        </el-card>
        <el-card class="box-card">
            <template #header>
            <div>
                <span>loading按钮</span>
            </div>
            </template>
            <div class="box-wrap">
                <huatec-button type="plain" isLoading>Loading...</huatec-button>
                <huatec-button type="primary" isLoading>Loading...</huatec-button>
                <huatec-button type="success" isLoading>Loading...</huatec-button>
                <huatec-button type="wraning" isLoading>Loading...</huatec-button>
                <huatec-button type="danger" isLoading>Loading...</huatec-button>
            </div>
        </el-card>

        <el-card class="box-card">
            <template #header>
            <div>
                <span>按钮组</span>
            </div>
            </template>
            <div class="box-wrap">
               <huatec-button-group>
                   <huatec-button type="primary" icon="huatec-liucheng"></huatec-button>
                   <huatec-button icon="huatec-11-guanzhuzhuangtai-xuanzhongzhuangtai" type="primary"></huatec-button>
                   <huatec-button type="primary" iconEnd icon="huatec-arrow-right"></huatec-button>
               </huatec-button-group>
                <huatec-button-group>
                   <huatec-button type="primary" icon="huatec-arrow-lift">Primary</huatec-button>
                   <huatec-button type="primary" iconEnd icon="huatec-arrow-right">Primary</huatec-button>
               </huatec-button-group>
                <huatec-button-group>
                   <huatec-button type="primary" icon="huatec-arrow-lift" isDisabled>Primary</huatec-button>
                   <huatec-button icon="huatec-huanfu1" type="primary"></huatec-button>
                   <huatec-button icon="huatec-11-guanzhuzhuangtai-xuanzhongzhuangtai"  type="primary"></huatec-button>
                   <huatec-button type="primary" iconEnd icon="huatec-arrow-right">Primary</huatec-button>
               </huatec-button-group>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.box-card{
    margin-top:30px;
}
.box-wrap{
    display: flex;
    justify-content: space-around;

}
</style>