<template>
    <div class="x-home-page">
        <div class="x-index">
            <div class="title">师资生源</div>
            <div class="teachers charts">
                <span class="icon-user-tie"></span>
                <div class="detail">
                    <div class="percent">2000/1800</div>
                    <div class="topic">公司总人数/上个月总人数</div>
                </div>
            </div>
            <div class="students charts">
                <span class="icon-user-tie"></span>
                <div class="detail">
                    <div class="percent">2000/1800</div>
                    <div class="topic">公司总人数/上个月总人数</div>
                </div>
            </div>
            <div class="graduations charts">
                <span class="icon-user-tie"></span>
                <div class="detail">
                    <div class="percent">2000/1800</div>
                    <div class="topic">公司总人数/上个月总人数</div>
                </div>
            </div>
        </div>
        <div class="x-reminder">
            <div class="title">工作提醒</div>
            <div class="info-panel">
                <div class="topic">用户消息<span class="icon-cog icon"></span></div>
                <ul class="messages">
                    <li class="msg-num">本月共有9条用户消息</li>
                    <li>
                        <div class="msg">xxx发来一条消息: "你好，我是学生管理系统有待完善！"</div>
                        <div class="date">10/28</div>
                    </li>
                    <li>
                        <div class="msg">xxx发来一条消息: "你好，我是学生管理系统有待完善！"</div>
                        <div class="date">10/28</div>
                    </li>
                    <li>
                        <div class="msg">xxx发来一条消息: "你好，我是学生管理系统有待完善！"</div>
                        <div class="date">10/28</div>
                    </li>
                </ul>
                <div class="more">查看更多 &gt;</div>
            </div>
            <div class="info-panel">
                <div class="topic">用户消息<span class="icon-cog icon"></span></div>
                <ul class="messages">
                    <li class="msg-num">本月共有9条用户消息</li>
                    <li>
                        <div class="msg">xxx发来一条消息: "你好，我是学生管理系统有待完善！"</div>
                        <div class="date">10/28</div>
                    </li>
                    <li>
                        <div class="msg">xxx发来一条消息: "你好，我是学生管理系统有待完善！"</div>
                        <div class="date">10/28</div>
                    </li>
                    <li>
                        <div class="msg">xxx发来一条消息: "你好，我是学生管理系统有待完善！"</div>
                        <div class="date">10/28</div>
                    </li>
                </ul>
                <div class="more">查看更多 &gt;</div>
            </div>
            <div class="info-panel">
                <div class="topic">用户消息<span class="icon-cog icon"></span></div>
                <ul class="messages">
                    <li class="msg-num">本月共有9条用户消息</li>
                    <li>
                        <div class="msg">xxx发来一条消息: "你好，我是学生管理系统有待完善！"</div>
                        <div class="date">10/28</div>
                    </li>
                    <li>
                        <div class="msg">xxx发来一条消息: "你好，我是学生管理系统有待完善！"</div>
                        <div class="date">10/28</div>
                    </li>
                    <li>
                        <div class="msg">xxx发来一条消息: "你好，我是学生管理系统有待完善！"</div>
                        <div class="date">10/28</div>
                    </li>
                </ul>
                <div class="more">查看更多 &gt;</div>
            </div>
        </div>
        <div class="x-interaction">
            <div class="title">互动环节</div>
            <div class="info-panel">
                <div class="topic">今日人物<span class="icon-user-tie icon"></span></div>
                <div class="content">
                    <div class="info last">
                        <img src="../../assets/logo.png" height="90px" width="90px">
                        <p>上一次  10月27日</p>
                        <p>谭发新  (深研)</p>
                    </div>
                    <div class="info next">
                        <img src="../../assets/logo.png" height="90px" width="90px">
                        <p>下一次  11月27日</p>
                        <p>陈淑仪 (深研)</p>
                    </div>
                </div>
            </div>
            <div class="info-panel">
                <div class="topic">员工生日<span class="icon-user-tie icon"></span></div>
                <div class="content">
                    <div class="info">
                        <img src="../../assets/logo.png" height="90px" width="90px">
                        <p class="number">本月深研过生日员工人数（人）</p>
                    </div>
                </div>
            </div>
            <div class="info-panel">
                <div class="topic">入职周年<span class="icon-user-tie icon"></span></div>
                <div class="content">
                    <div class="info">
                        <img src="../../assets/logo.png" height="90px" width="90px">
                        <p class="number">本月深研满一年人数（人）</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright &copy; 2017 22-Techno Inc. All rights reserved</p>
            <p>Owned By Louis_King, 15626424953</p>
        </div>
    </div>
</template>

<style lang="less">
.x-home-page{
    padding: 20px;
    height: 100%;
    .x-index{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: flex-start;
        height: 160px;
        .title{
            padding-left: 10px;
            margin-bottom: 20px;
            height: .5rem;
            width: 100%;
            border-left: 10px solid #fc923f;
        }
        .charts{
            height: 80px;
            line-height: 80px;
            width: 30%;
            text-align: center;
            color: white;
            border-radius: 5px;
            overflow: hidden;
            span{
                font-size: 20px;
            }
            .detail{
                display: inline-block;
                height: 50px;
                text-align: center;
                vertical-align: middle;
                .percent{
                    height: 24px;
                    line-height: 24px;
                    font-size: 24px;
                }
                .topic{
                    height: 20px;
                    line-height: 20px;
                    font-size: 12px;
                    transform: scale(0.8);
                }
            }
        }
        .teachers{
            background-image:linear-gradient(-90deg, #b59def 0%, #a991e2 100%);
            box-shadow:-1px -1px 2px 0px rgba(0,0,0,0.01), 1px 1px 2px 0px rgba(0,0,0,0.01);
        }
        .students{
            background-image:linear-gradient(90deg, #66c5e9 0%, #7fd2f1 100%);
            box-shadow:-1px -1px 2px 0px rgba(0,0,0,0.01), 1px 1px 2px 0px rgba(0,0,0,0.01);
        }
        .graduations{
            background-image:linear-gradient(90deg, #f6c660 0%, #f6c660 100%);
            box-shadow:-1px -1px 2px 0px rgba(0,0,0,0.01), 1px 1px 2px 0px rgba(0,0,0,0.01);
        }
    }
    .x-reminder{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: flex-start;
        height: 300px;
        .title{
            padding-left: 10px;
            margin-bottom: 20px;
            height: .5rem;
            width: 100%;
            border-left: 10px solid #fc923f;
        }
        .info-panel{
            position: relative;
            height: 230px;
            width: 30%;
            font-size: 12px;
            background: #f8f9f9;
            border: 1px solid #eeeeee;
            border-radius: 3px;
            .topic{
                position: relative;
                padding-left: 10px;
                height: 25px;
                line-height: 25px;
                color: #666666;
                font-weight: bolder;
                border: 1px solid #E8EBEB;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                background: #E8EBEB;
                .icon{
                    position: absolute;
                    top: 5px;
                    right: 10px;
                    color: #cccccc;
                }
            }
            .messages{
                li{
                    position: relative;
                    margin-left: 10px;
                    .msg{
                        padding-right: 50px;
                        height: 40px;
                        line-height: 40px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .date{
                        position: absolute;
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                        top: 0;
                        right: 0;
                    }
                }
                .msg-num{
                    height: 30px;
                    line-height: 30px;
                    color: #999999;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            .more{
                position: absolute;
                right: 10px;
                bottom: 15px;
                color: #72CBED;
            }
        }
    }
    .x-interaction{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: flex-start;
        height: 250px;
        .title{
            padding-left: 10px;
            margin-bottom: 20px;
            height: .5rem;
            width: 100%;
            border-left: 10px solid #fc923f;
        }
        .info-panel{
            position: relative;
            height: 200px;
            width: 30%;
            font-size: 12px;
            background: #f8f9f9;
            border: 1px solid #eeeeee;
            border-radius: 3px;
            overflow: hidden;
            .topic{
                position: relative;
                padding-left: 10px;
                height: 25px;
                line-height: 25px;
                color: #666666;
                font-weight: bolder;
                border: 1px solid #E8EBEB;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                background: #E8EBEB;
                .icon{
                    position: absolute;
                    top: 5px;
                    right: 10px;
                    color: #cccccc;
                }
            }
            .content{
                padding: 20px 0;
                text-align: center;
                .info{
                    display: inline-block;
                    padding: 0 20px;
                    color: #666666;
                    .number{
                        margin-top: 20px;
                    }
                    img{
                        margin-bottom: 5px;
                        border-radius: 50%;
                        border: 1px solid #cccccc;
                    }
                    p{
                        height: 20px;
                        line-height: 20px;
                    }
                    p:last-child{
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
    .copyright{
        position: relative;
        line-height: 25px;
        text-align: center;
        font-family: Arial;
        color: #666666;
        bottom: -50px;
    }
}
</style>