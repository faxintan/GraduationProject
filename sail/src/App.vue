<template>
    <div id="app">
        <div class="g-top">
            <router-view name="header"></router-view>
        </div>
        <div class="g-left">
            <router-view name="slide-bar"></router-view>
        </div>
        <div class="g-right">
            <router-view name="content"></router-view>
        </div>
    </div>
</template>

<style src="./styles/index.less" lang="less"></style>
<style type="text/css">
#app{
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: flex-start;
    height: 100%;
    width: 100%;
}
#app .g-top{
    height: 50px;
    line-height: 50px;
    width: 100%;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #686F79;
}
#app .g-left{
    height: calc(100% - 50px);
    max-width: 297px;
    border-left: 1px solid #686F79;
    border-bottom: 1px solid #686F79;
}
#app .g-right{
    flex: 1 1 auto;
    height: calc(100% - 50px);
    width: calc(100% - 300px);
    border-right: 1px solid #686F79;
    border-bottom: 1px solid #686F79;
}
</style>
