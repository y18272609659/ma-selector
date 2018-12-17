<template>
    <div class="used">
        <div>问题简述：<input class="question"/></div>
        <div>
            可供选择的解决方案：
            <input class='item' v-model="inputValueOne">
            <button class="BtnOpt" @click="handleSubmit">提交</button>
            <ul class="option">
                <li v-for="(item , index) of list" :key="index">{{item}}</li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Used',
        data () {
            return {
                inputValueOne: '',
                list: []
            }
        },
        methods: {
            handleSubmit () {
                this.list.push(this.inputValueOne);
                this.inputValueOne = '';
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .used
        background rgba(255,255,255,0.4)
        color #545553
        font-size 15px
        font-weight bold
        border 2px solid white
        line-height 2
        .question
            width 500px
        .BtnOpt
            width 60px
            color #5a5a5a
            border 1px solid #acadaa
        .option
            color darkslateblue
            font-weight normal
</style>
