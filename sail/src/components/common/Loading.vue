<template>
    <div class="x-loader-container">
        <div class="x-loader">
            <i></i><i></i>
        </div>
    </div>
</template>

<style lang="less">
.x-loader-container{
    position: fixed;
    margin: auto;
    width: 80px;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .x-loader{
        position: relative;
        margin: 0 auto;
        height: 20px;
        width: 20px;
        animation: spin 1.5s linear infinite;
        i{
            position: absolute;
            display: block;
            height: 20px;
            width: 20px;
            border-radius: 50%;
        }
        i:before, i:after{
            position: absolute;
            display: block;
            content: '';
            height: inherit;
            width: inherit;
            border-radius: inherit;
        }
        i:first-child:before{
            background-color: rgba(52, 149, 221, 0.9);
            animation: rotate-top-left 1.5s linear infinite;
        }
        i:first-child:after{
            background: rgba(225, 73, 44, 0.9);
            animation: rotate-top-right 1.5s linear infinite;
        }
        i:last-child:before{
            background: rgba(249, 206, 43, 0.9);
            animation: rotate-bottom-left 1.5s linear infinite;
        }
        i:last-child:after{
            background-color: rgba(0, 153, 117, 0.9);
            animation: rotate-bottom-right 1.5s linear infinite;
        }
    }
}
@keyframes spin{
    0% { transform: rotate(0deg); }
    50% { transform: rotate(-180deg); }
    100% { transform: rotate(-360deg); }
}
@keyframes rotate-top-right{
    0% { transform: rotate(0deg); }
    50% {
        transform: rotate(-180deg);
        transform-origin: 20% 20%;
    }
    100% { transform: rotate(-360deg); }
}
@keyframes rotate-top-left {
    0% { transform: rotate(0deg); }
    50% {
        transform: rotate(180deg);
        transform-origin: 80% 20%;
    }
    100% { transform: rotate(360deg); }
}
@keyframes rotate-bottom-right{
    0% { transform: rotate(0deg); }
    50% {
        transform: rotate(-180deg);
        transform-origin: 80% 80%;
    }
    100% { transform: rotate(-360deg); }
}
@keyframes rotate-bottom-left{
    0% { transform: rotate(0deg); }
    50% {
        transform: rotate(180deg);
        transform-origin: 20% 80%;
    }
    100% { transform: rotate(360deg); }
}
</style>