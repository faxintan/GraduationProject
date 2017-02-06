<template>
    <div class="x-circle-menu">
        <div class="menu">
            <div class="button"
                 :class="{active:open}"
                 @click="open=!open"></div>
            <ul class="items" :class="{open:open}">
                <li>菜单</li>
                <li>菜单</li>
                <li>菜单</li>
                <li>菜单</li>
                <li>菜单</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data () {
        return {
            open: false
        }
    }
}
</script>

<style lang="less">
.x-circle-menu{
    font-family: 'Lato', sans-serif;
    text-align: center;
    text-transform: uppercase;
    .menu{
        width: 100%;
        max-width: 670px;
        min-width: 550px;
        margin: 70px auto;
    }
    .button{
        position: relative;
        margin-left: -35px;
        width: 70px;
        height: 70px;
        line-height: 70px;
        left: 50%;
        border-radius: 50%;
        background:  linear-gradient(to top left, #BBBBBB, white);
    }
    .button, .items{
        transition: all 1s cubic-bezier(.87,-.41,.19,1.44);
    }
    .button:after{
        content: '+';
    }
    .button.active{
        left: 60px;
        transform: rotate(45deg);
    }
    .items{
        box-sizing: content-box;
        margin: -68px 0 0 45%;
        padding: 16px 10px 10px 50px;
        list-style: none;
        width: 0%;
        height: 36px;
        line-height: 36px;
        border-radius: 36px;
        overflow: hidden;
        background-color: #EEEEEE;
        box-shadow: 1px 1px 1px 1px #DCDCDC;
    }
    .items.open{
        margin: -68px 0 0 5%;
        width: 80%;
    }
    .items li{
        display: none;
        width: 10%;
        color: #3AB09E;
    }
    .items.open li{
        display: inline-block;
        width: 16%;
    }
}
</style>