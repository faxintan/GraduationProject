<template>
	<div class="x-slide-bar">
        <div class="x-container" v-show="show">
            <div class="x-logo">
                <div class="x-portrait" @click="showDialog">
                    <img src="../../assets/logo.png" alt="Logo">
                </div>
                <x-dialog title="登录" v-model="login">hello</x-dialog>
            </div>
            <ul class="x-menu">
                <router-link tag="li" to="/home">
                    <span class="icon-home"></span>首  页
                </router-link>
                <router-link tag="li" to="/student">
                    <span class="icon-profile"></span>学籍信息
                </router-link>
                <router-link tag="li" to="/major">
                    <span class="icon-svg"></span>专业信息
                </router-link>
                <router-link tag="li" to="/class">
                    <span class="icon-books"></span>课程信息
                </router-link>
                <router-link tag="li" to="/grade">
                    <span class="icon-spell-check"></span>成绩信息
                </router-link>
                <router-link tag="li" to="/graduation">
                    <span class="icon-user-tie"></span>毕业信息
                </router-link>
                <router-link tag="li" to="/poverty">
                    <span class="icon-paypal"></span>贫困信息
                </router-link>
                <router-link tag="li" to="/system">
                    <span class="icon-cog"></span>系统账户
                </router-link>
            </ul>
        </div>
        <div class="x-ctrl-btn" @click="show=!show">
            <div class="x-triangle" :class="{right: !show, left: show}"></div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Dialog from '../common/Dialog'

export default {
    data () {
        return {
            show: true,
            login: false
        }
    },
    components: {
        'x-dialog': Dialog
    },
    methods: {
        showDialog () {
            this.login = true
        }
    }
}
</script>

<style lang="less">
.x-slide-bar{
    position: relative;
    height: 100%;
    border-right: 2px solid #D3D9E4;
    background-color: #EEF1F6;
    .x-container{
        .x-logo{
            padding-top: 20px;
            padding-bottom: 20px;
            height: 25%;
            .x-portrait{
                position: relative;
                margin: 0 auto;
                height: 100px;
                width: 100px;
                border-radius: 50%;
                img{
                    border-radius: 50%;
                }
            }
            .x-portrait:after{
                position: absolute;
                content: '';
                height: 100px;
                width: 100px;
                left: 0px;
                opacity: 0.3;
                border-radius: 50%;
                background-color: #E2E5EA;
            }
            .x-portrait:hover:after{
                position: absolute;
                content: '';
                height: 100px;
                width: 100px;
                left: 0px;
                opacity: 0;
                border-radius: 50%;
            }
            .x-portrait:active:after{
                position: absolute;
                content: '';
                height: 100px;
                width: 100px;
                left: 0px;
                opacity: 0.1;
                border-radius: 50%;
                background-color: #666666;
            }
        }
        .x-menu{
            li{
                padding-right: 50px;
                padding-left: 20px;
                height: 40px;
                line-height: 40px;
                border-radius: 5px;
                cursor: pointer;
                span{
                    margin-right: 10px;
                }
            }
            li:hover{
                background-color: #B3B9C2;
            }
        }        
    }
    .x-ctrl-btn{
        position: absolute;
        border-left: 25px solid #D3D9E4;
        border-top: 45px solid transparent;
        border-bottom: 45px solid transparent;
        height: 150px;
        width: 0;
        top: 30%;
        right: -25px;
        .x-triangle{
            position: absolute;
            width: 0;
            height: 0;
            right: 5px;
        }
        .right{
            border-top: 30px solid transparent;
            border-left: 15px solid #686F79;
            border-bottom: 30px solid transparent;
        }
        .left{
            border-top: 30px solid transparent;
            border-right: 15px solid #686F79;
            border-bottom: 30px solid transparent;  
        }
    }
    .x-ctrl-btn:active{
        border-left-color: #B7BECB;
    }
    .router-link-active{
        color:#20A0FF;
    }    
}
</style>