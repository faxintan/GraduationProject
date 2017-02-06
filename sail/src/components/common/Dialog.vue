<template>
    <div class="x-dialog" v-show="value">
        <div class="mask" @click="close"></div>
        <div class="dialog">
            <div class="title">{{title}}<span @click="close">&times;</span></div>
            <div class="content"><slot></slot></div>
            <div class="footer" v-if="footer">
                <x-button :blue="true" :small="true">确 定</x-button>
                <x-button :gray="true" :small="true" @click.native="close">取 消</x-button>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Button from './BUtton'

export default {
    props: ['value', 'title', 'footer'],
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
.x-dialog{
    .mask{
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0.2;
        z-index: 100;
        background-color: #666666;
    }
    .dialog{
        position: fixed;
        margin: auto;
        height: 50%;
        width: 50%;
        min-width: 350px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 101;
        border-radius: 5px;
    }
    .title{
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 3px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background: linear-gradient(to top left, #999999, #666666);
        span{
            display: inline-block;
            float: right;
            line-height: 30px;
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
    .footer{
        padding: 0 10px;
        height: 40px;
        line-height: 35px;
        text-align: right;
        border: 1px solid #CCCCCC;
        border-top: none;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        background-color: #EFEFEF;
    }
}
</style>