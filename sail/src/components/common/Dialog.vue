<template>
    <div class="x-dialog-container" v-show="value">
        <div class="mask" @click="close"></div>
        <div class="dialog">
            <div class="title">{{title}}<span @click="close">&times;</span></div>
            <div class="content"><slot></slot></div>
            <div class="footer">
                <div class="comfirm">确定</div>
                <div class="cancel" @click="close">取消</div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    props: ['value', 'title'],
    methods: {
        close () {
            this.$emit('input', false)
        }
    }
}
</script>

<style lang="less">
.x-dialog-container{
    .mask{
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0.2;
        z-index: 10;
        background-color: #666666;
    }
    .dialog{
        position: fixed;
        margin-top: -250px;
        margin-left: -250px;
        height: 450px;
        width: 500px;
        top: 50%;
        left: 50%;
        z-index: 11;
        border-radius: 5px;
        .title{
            padding: 0 10px;
            height: 30px;
            line-height: 30px;
            border-bottom: 1px solid #CCCCCC;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            background-color: #686F79;
            span{
                display: inline-block;
                float: right;
                cursor: pointer;
            }
        }
        .content{
            height: 380px;
            border-left: 1px solid #CCCCCC;
            border-right: 1px solid #CCCCCC;
            background-color: #FFFFFF;
        }
        .footer{
            padding: 0 10px;
            height: 40px;
            line-height: 40px;
            text-align: right;
            border: 1px solid #CCCCCC;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            background-color: #EFEFEF;
            .comfirm, .cancel{
                display: inline-block;
                height: 30px;
                line-height: 30px;
                width: 60px;
                letter-spacing: 1px;
                text-align: center;
                font-size: 14px;
                cursor: pointer;
                border: 1px solid #CCCCCC;
                border-radius: 3px;
            }
            .comfirm{
                color: white;
                background-color: #4287E0;
            }
            .comfirm:active{
                background-color: #347BD6;
            }
            .cancel{
                background-color: #FFFFFF;
            }
            .cancel:active{
                background-color: #CCCCCC;
            }
        }
    }
}
</style>