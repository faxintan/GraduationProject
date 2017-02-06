<template>
    <span class="x-checkbox">
        <input class="input__checkbox"
               type="checkbox"
               :id="id"
               :name="name"
               :checked="checked"
               :disabled="disabled">
        <label :for="id"><slot></slot></label>
    </span>
</template>

<script type="text/javascript">
export default {
    props: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        checked: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less">
.x-checkbox{
    padding: 10px 10px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    input{
        font-family: 'icomoon' !important;
        text-align: center;
        appearance: none;
    }
    .input__checkbox:before{
        display: inline-block;
        content: ' ';
        width: 15px;
        height: 15px;
        border: 1px solid #CCCCCC;
        border-radius: 2px;
        overflow: hidden;
    }
    .input__checkbox:focus:before{
        border: 1px solid #888888;
    }
    .input__checkbox:active:before, .input__checkbox:checked:before{
        content: '\e920';
    }
    .input__checkbox:disabled:before{
        display: inline-block;
        content: ' ';
        width: 15px;
        height: 15px;
        background: linear-gradient(to top, #CCCCCC, #EEEEEE);
        border: 1px solid #CCCCCC;
        border-radius: 2px;
    }
    label{
        color: #666666;
    }
}
</style>