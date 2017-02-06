<template>
    <div class="x-circle-container"
         :style="container">{{percent + '%'}}
        <div class="right-outter">
            <div class="right-innter" :style="rightTransform"></div>
        </div>
        <div class="left-outter">
            <div class="left-inner" :style="leftTransform"></div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    props: {
        percent: {
            type: Number,
            default: 0
        },
        colorA: {
            type: String
        },
        colorB: {
            type: String
        },
        colorC: {
            type: String
        }
    },
    computed: {
        rightTransform () {
            if (this.percent > 50) {
                return {
                    'transform': 'rotate(' + 180 + 'deg)',
                    'border-color': this.colorC
                }
            }
            return {
                'transform': 'rotate(' + this.percent * 3.6 + 'deg)',
                'border-color': this.colorC
            }
        },
        leftTransform () {
            if (this.percent > 100) {
                return {
                    'transform': 'rotate(' + 180 + 'deg)',
                    'border-color': this.colorC
                }
            } else {
                if (this.percent > 50) {
                    return {
                        'transform': 'rotate(' + (this.percent - 50) * 3.6 + 'deg)',
                        'border-color': this.colorC
                    }
                }
            }
            return null
        },
        container () {
            return {
                'background': this.colorA,
                'border-color': this.colorB
            }
        }
    }
}
</script>

<style lang="less">
.x-circle-container{
    position: relative;
    display: inline-block;
    margin: 10px;
    width: 100px;
    height: 100px;
    line-height: 80px;
    text-align: center;
    border-radius: 50%;
    border: 10px solid #2525F0;
    background: linear-gradient(to top left, #BBBBBB, white);
    .right-outter{
        position: absolute;
        width: 50px;
        height: 100px;
        top: -10px;
        right: -10px;
        overflow: hidden;
    }
    .right-innter{
        position: absolute;
        width: 100px;
        height: 100px;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        border: 10px solid #F70A0A;
        clip: rect(0 50px 100px 0px);
        transition: transform 1s linear;
    }
    .left-outter{
        position: absolute;
        width: 50px;
        height: 100px;
        top: -10px;
        left: -10px;
        overflow: hidden;
        transform: rotate(180deg);
    }
    .left-inner{
        position: absolute;
        width: 100px;
        height: 100px;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        border: 10px solid #F70A0A;
        clip: rect(0 50px 100px 0px);
        transition: transform 1s linear 1s;
    }
}
</style>
