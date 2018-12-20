<template>
    <div class="testing">
        <home-header></home-header>
        <div class="content">
            <div class="question">
                <span>目前面对的难题:</span>
                {{question}}
            </div>
            <div class="list" v-for="(item1,index) of list" :key="index"><span>关于</span>{{item1}}<span>打分</span>
                <br/>
                <div v-for="(item2,index) of factor" :key="index" class="factor">
                    {{item2}}
                    <button @click="handleCheckout(item1,item2,item3)" class="number" v-for="item3 of Num" :key="item3">{{item3}}</button>
                </div>
            </div>
            <button @click="handleReport" class="complete">complete</button>
        </div>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from '../Hello/component/header'
import HomeFooter from '../Hello/component/footer'
// import store from '../../store'
    export default {
        name: 'Testing',
        components: {
            HomeHeader,
            HomeFooter
        },
        data() {
            return {
                question: localStorage.getItem('question'),
                list: JSON.parse(localStorage.getItem('list')),
                factor: JSON.parse(localStorage.getItem('factor')),
                Num: [1,2,3,4,5,6,7,8,9,10],
                allNumber: []
            }
        },
        created: function () {
            // console.log(this.list)
            // console.log(this.factor)
        },
        methods: {
            handleCheckout (item1,item2,item3) {
                for (let i = 0 ; i < this.list.length ; i++){
                    if (item1 === this.list[i]){

                        for(let j = 0 ; j < this.factor.length ; j++) {
                            if (item2 === this.factor[j]) {
                                if ( this.allNumber[i] ) {
                                    this.allNumber[i] += (this.factor.length - j) * item3
                                } else {
                                    this.allNumber[i] = (this.factor.length - j) * item3
                                }
                            }
                        }
                    }
                }
            },
            handleReport () {
                if ( this.allNumber.length === this.list.length) {
                    localStorage.setItem('allNumber',JSON.stringify(this.allNumber))
                    console.log(this.allNumber)
                } else {
                    alert('Woo！表格还剩' + (this.list.length-this.allNumber.length) +'项没有填完？不要心急呀！')
                }
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        overflow hidden
        min-height 506px
        background #e8e8e8
        .question
            text-align center
            height 40px
            line-height 40px
            margin 5px 0
            background white
            font-size 16px
        .question span
            font-weight bold
            color: #5f9ea0
        .list
            min-height 40px
            margin-bottom 1px
            padding 10px 10px 10px 20px
            line-height 3rem
            background white
            font-size 16px
        .list span
            font-weight bold
            color: #5f9ea0
        .factor
            display inline-block
            padding-left 50px
            color #6b6b6b
            font-size 14px
            .number
                height 25px
                width 25px
                background #e8e8e8
                border 1px solid #d2d3d0
                text-align center
                color #333333
            .number:hover
                background white
                border 2px solid #e8e8e8
            .number:active
                background yellow
                border 2px solid #f2c200
                transition:background 0.1s;
        .complete
            display block
            width 120px
            height 40px
            margin 20px auto
            padding 2px
            border-radius 15px
            font-size 20px
            border 2px solid #cacbc8
            color #333333
        .complete:hover
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.20),0 17px 50px 0 rgba(0,0,0,0.15)
</style>
