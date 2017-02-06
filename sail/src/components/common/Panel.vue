<template>
    <div class="x-dialog-container" v-show="value">
        <div class="mask" @click="close"></div>
        <div class="dialog">
            <div class="title">{{title}}<span @click="close">&times;</span></div>
            <div class="content"><slot></slot></div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Button from './BUtton'

export default {
    props: ['value', 'title'],
    methods: {
        close () {
            this.$emit('input', false)
        }
    },
    components: {
        'x-button': Button
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
        width: 50%;
        top: 20%;
        left: 25%;
        z-index: 11;
        border-radius: 5px;
        .title{
            padding: 0 10px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 3px;
            border-bottom: 1px solid #CCCCCC;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            background: linear-gradient(to top, #767C84, #686F79);
            span{
                display: inline-block;
                float: right;
                cursor: pointer;
                color: #555555;
            }
            span:hover{
                color: #CCCCCC;
            }
            span:active{
                color: #444444;
            }
        }
        .content{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px;
            border: 1px solid #CCCCCC;
            background-color: #FFFFFF;
        }
    }
}
</style>