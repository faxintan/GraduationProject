<template>
    <span class="x-input">
        <input class="input__field"
               :id="id"
               :type="type"
               :placeholder="placeholder">
        <label class="input__label" :for="id">
            <span class="input__label-content icon-user-tie"></span>
        </label>
    </span>
</template>

<script type="text/javascript">
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        id: {
            type: String
        },
        placeholder: {
            type: String
        }
    }
}
</script>

<style>
.x-input{
    clear: both;
    display: inline-block;
    margin: 15px;
    box-sizing: border-box;
}
.x-input .input__field{
    display: inline-block;
    float: right;
    margin: 0;
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    width: calc(100% - 60px);
    border: 1px solid #ECECEC;
}
.x-input .input__label{
    display: inline-block;
    width: 60px;
    height: 40px;
    line-height: 45px;
    text-align: center;
    font-size: 18px;
    color: white;
    background-color: #E2DFDF;
}
.x-input .input__label-content{
    display: inline-block;
    font-size: 20px;
    color: #666666;
}
.x-input .input__label .input__label-content{
    transition: all .4s;
}
.x-input .input__field:focus{
    border: 1px solid #C1DAE4;
    border-left: none;
}
.input__field:focus + .input__label{
    background-color: #C1DAE4;
}
.input__field:focus + .input__label .input__label-content{
    color: white;
    transform: scale(1.2);
}
</style>