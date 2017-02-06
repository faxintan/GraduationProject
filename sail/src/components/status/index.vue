<template>
    <div class="x-status-page">
        <div class="portrait"></div>
        <div class="base-info">
            <p class="name">姓名: <span>谭发新</span></p>
            <p class="school">学校: <span>广州大学<span></p>
            <p class="sex">性别: <span>男<span></p>
            <p class="faculty">院系: <span>计算机<span></p>
            <p class="phone">手机: <span>15626424953<span></p>
            <p class="major">专业: <span>计算机科学与技术<span></p>
            <p class="address">地址: <span>广东省阳江市阳西县振昌六街11号<span></p>
        </div>
        <x-panel :title="'个人简介'">
            <span slot="icon" class="icon-svg"></span>士大夫士大夫
        </x-panel>
        <x-panel :title="'教育经历'">士大夫撒艾弗森的</x-panel>
        <x-panel :title="'个人奖励'">士大夫撒艾弗森的</x-panel>
        <x-panel :title="'学费缴纳'">士大夫撒艾弗森的</x-panel>
        <x-panel :title="'贷款情况'">士大夫撒艾弗森的</x-panel>
        <x-panel :title="'补助情况'">士大夫撒艾弗森的</x-panel>
        <div  class="btn-change">
            <x-button :white="true" :big="true">更改资料</x-button>
        </div>
    </div>
</template>

<script type="text/javascript">
import Panel from '../common/Panel'
import Button from '../common/Button'

export default {
    components: {
        'x-panel': Panel,
        'x-button': Button
    }
}
</script>

<style lang="less">
.x-status-page{
    padding: 20px 10px;
    .portrait{
        float: right;
        margin-right: 10px;
        width: 150px;
        height: 150px;
        background-image: url(../../assets/logo.png);
        background-size: contain;
        background-color: #999999;
    }    
    .base-info{
        display: flex;
        flex-wrap: wrap;
        margin: 0 100px 10px 10px;
        p{
            padding: 0 10px;
            height: 40px;
            line-height: 40px;
            width: 50%;
            overflow: hidden;
            span{
                color: #333333;
                font-weight: bolder;
                letter-spacing: 1px;
            }
        }
        .address{
            margin-bottom: 10px;
            width: 100%;
            height: 80px;
        }
        .name, .school, .phone, .major{
            background-color: #E8EBEB;
        }
    }
    .btn-change{
        text-align: right;
    }
}
</style>