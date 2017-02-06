<template>
    <div class="x-panel">
        <div class="title">{{title}}<slot name="icon"></slot></div>
        <div class="content"><slot></slot></div>
    </div>
</template>

<script type="text/javascript">
export default {
    props: {
        title: {
            type: String,
            default: '标 题'
        }
    }
}
</script>

<style lang="less">
.x-panel{
    margin: 25px 10px;
    .title{
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 3px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background: linear-gradient(to top left, #E8EBEB, #EEEEEE);
        span{
            display: inline-block;
            float: right;
            line-height: 30px;
            cursor: pointer;
            color: #666666;
        }
        span:active{
            color: #333333;
        }        
    }

    .content{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px;
        border: 1px solid #E8EBEB;
        background-color: #FFFFFF;
    }
}
</style>