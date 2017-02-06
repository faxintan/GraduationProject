<template>
    <button type="button"
          class="x-button" 
          :class="{
                blue:blue, gray:gray|defaultColor, red:red, black:black, green:green,
                big:big, middle:middle|defaultScale, small:small
            }"
        >
        <slot></slot>
    </button>
</template>

<script type="text/javascript">
export default {
    props: {
        blue: {
            type: Boolean,
            default: false
        },
        gray: {
            type: Boolean,
            default: false
        },
        red: {
            type: Boolean,
            default: false
        },
        black: {
            type: Boolean,
            default: false
        },
        green: {
            type: Boolean,
            default: false
        },
        big: {
            type: Boolean,
            default: false
        },
        middle: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        defaultColor () {
            return !(this.blue | this.gray | this.red | this.black | this.green)
        },
        defaultScale () {
            return !(this.big | this.middle | this.small)
        }
    }
}
</script>

<style>
.x-button{
    position: relative;
    display: inline-block;
    text-align: center;
    color: white;
    letter-spacing: 3px;
    text-shadow: 1px 1px 1px #333;
    overflow: hidden;
}
.big{
    margin-right: 20px;
    width: 130px;
    height: 38px;
    line-height: 38px;
    font-size: 16px;
    font-weight: bolder;
    border-radius: 5px;
}
.middle{
    margin-right: 15px;
    width: 80px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 3px;
}
.small{
    margin-right: 5px;
    width: 60px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    font-weight: lighter;
    border-radius: 3px;
}

/*蓝色*/
.blue{
    border: 1px solid #71B1CA;
    box-shadow: 0 1px 2px #6BB2CE inset, 0 -1px 0 #74C0DE inset, 0 -2px 3px #6EBCDB inset;
    background: linear-gradient(to top, #77C2E0, #68B1CE);
}
.blue:hover{
    background: linear-gradient(to top, #78BAD5, #65A8C4);
}
.blue:active{
    top:1px;
    box-shadow: 0 1px 3px #114566 inset,0 3px 0 #fff;
    background: linear-gradient(to top, #1a71a8, #1976b1);
}
/*白色*/
.gray{
    color: #666666;
    text-shadow:1px 1px 1px #fff;
    border:1px solid #dce1e6;
    box-shadow: 0 1px 2px #fff inset,0 -1px 0 #a8abae inset;
    background: linear-gradient(to top,#f2f3f7,#e4e8ec);
}
.gray:hover{
    background: linear-gradient(to top,#f2f3f7,#ebeced);
}
.gray:active{
    top:1px;
    box-shadow: 0 1px 3px #a8abae inset,0 3px 0 #fff;
    background: linear-gradient(to top,#e4e8ec,#e4e8ec);
}
/*红色*/
.red{
    border:1px solid #b42323;
    box-shadow: 0 1px 2px #e99494 inset,0 -1px 0 #954b4b inset,0 -2px 3px #e99494 inset;
    background: linear-gradient(to top,#d53939,#b92929);
}
.red:hover{
    background: linear-gradient(to top,#eb6f6f,#c83c3c);
}
.red:active{
    top:1px;
    box-shadow: 0 1px 3px #5b0505 inset,0 3px 0 #fff;
    background: linear-gradient(to top,#b11a1a,#bf2626);
}
/*灰色*/
.black{
    border:1px solid #333;
    box-shadow: 0 1px 2px #8b8b8b inset,0 -1px 0 #3d3d3d inset,0 -2px 3px #8b8b8b inset;
    background: linear-gradient(to top,#656565,#4a4a4a);
}
.black:hover{
    background: linear-gradient(to top,#818181,#575757);
}
.black:active{
    top:1px;
    box-shadow: 0 1px 3px #111 inset,0 3px 0 #fff;
    background: linear-gradient(to top,#424242,#575757);
}
/*绿色*/
.green{
    border:1px solid #64c878;
    box-shadow: 0 1px 2px #b9ecc4 inset,0 -1px 0 #6c9f76 inset,0 -2px 3px #b9ecc4 inset;
    background: linear-gradient(to top,#90dfa2,#41B883);
}
.green:hover{
    background: linear-gradient(to top,#aaebb9,#50C490);
}
.green:active{
    top:1px;
    box-shadow: 0 1px 3px #4d7254 inset,0 3px 0 #fff;
    background: linear-gradient(to top,#5eac6e,#72b37e);
}
</style>
