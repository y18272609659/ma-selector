<template>
    <div class="used">
        <div>问题简述：<input class="question" v-model="question"/></div>
        <div class="flex">
            <div class="Opt">
                可供选择的解决方案：
                <input class='item' v-model="inputValueOne">
                <button class="BtnOpt" @click="handleSubmitOne">提交</button>
                <ul class="option">
                    <li v-for="(item , index) of list" :key="index">{{item}}</li>
                </ul>
            </div>
            <div class="Fat">
                与选择相关的考虑因素：
                <input class='item' v-model="inputValueTwo">
                <button class="BtnOpt" @click="handleSubmitTwo">提交</button>
                <div class="explain">(请按照因素的重要程度依次输入，越重要的因素排的越靠前)</div>
                <ul class="factor">
                    <li v-for="(item , index) of factor" :key="index">{{index+1}}. {{item}}</li>
                </ul>
            </div>
            <button @click="handleDelete" class="clear">清空</button>
            <button @click="handleSubmitAll" class="start">
                <!--<a href="/testing" class="header-hello">开始</a>-->
                <router-link to="/testing" class="goto">开始</router-link>
            </button>
        </div>
    </div>
</template>

<script>
    import store from '../../../store'
    export default {
        name: 'Used',
        data () {
            return {
                question: '',
                inputValueOne: '',
                inputValueTwo: '',
                list: [],
                factor: []
            }
        },
        watch: {
            question(){},

        },
        methods: {
            handleSubmitOne () {
                this.list.push(this.inputValueOne);
                this.inputValueOne = '';
            },
            handleSubmitTwo () {
                this.factor.push(this.inputValueTwo);
                this.inputValueTwo = '';
            },
            handleDelete () {
                this.inputValueOne = '';
                this.inputValueTwo = '';
                this.question = '';
                this.list = [];
                this.factor = [];
            },
            handleSubmitAll () {
                store.saveOne(this.question);
                store.saveTwo(this.list);
                store.saveThree(this.factor);
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .used
        background #e8e8e8
        color #545553
        font-size 15px
        font-weight bold
        border 2px solid white
        line-height 3
        .flex
            display grid
            margin-top 10px
            .Opt
                grid-column-start: 2
                grid-column-end: 4
            .Fat
                grid-column-start: 6
                grid-column-end: 8
            .start
                grid-column-start: 6
                grid-row-start: 2
            .clear
                grid-column-start: 3
                grid-row-start: 2
        .question
            width 500px
            border 1px solid gainsboro
            border-radius 5px
            color #434343
        .explain
            color #9fa09d
            font-size 13px
            font-weight lighter
            margin-top -10px
        .item
            border 1px solid gainsboro
            border-radius 5px
            color #434343
        .BtnOpt
            width 60px
            margin-left 10px
            border-radius 20px
            color #5a5a5a
            border 1px solid #acadaa
        .option , .factor
            color darkslateblue
            font-weight normal
            line-height 2
        .start , .clear
            display inline-block
            width 80px
            height 40px
            margin-top 30px
            padding 2px
            border-radius 15px
            font-size 20px
            border 2px solid #d1d2cf
            color #333333
        .start:hover,
        .clear:hover
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.20),0 17px 50px 0 rgba(0,0,0,0.15)
        .goto
            color #5a5a5a
            font-weight bold
    </style>
