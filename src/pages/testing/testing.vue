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
            <button @click="handleReport" class="complete">
                <router-link to="/result" class="goto">complete</router-link>
            </button>
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
        methods: {
            handleCheckout (item1,item2,item3) {
                for (let i = 0 ; i < this.list.length ; i++ ) {
                    if (item1 === this.list[i]) {
                        for (let j = 0 ; j < this.factor.length ; j++) {
                            if (item2 === this.factor[j]) {
                                let List = document.getElementsByClassName('list')[i];
                                    let Factor = List.getElementsByClassName('factor')[j];
                                    let old = Factor.getElementsByClassName('checkout')[0];
                                    let num = Factor.getElementsByTagName('button')[item3-1];
                                        if (!old) {
                                            num.setAttribute('class','checkout')
                                        } else {
                                            old.setAttribute('class','number');
                                            num.setAttribute('class','checkout');
                                        }
                            }
                        }
                    }
                }
            },

            handleReport () {
                for (let i = 0 ; i < this.list.length ; i++){
                        this.allNumber[i] = 0
                        let Factor = document.getElementsByClassName('list')[i].getElementsByClassName('factor');
                            for (let j = 0 ; j < Factor.length ; j++) {
                                let Num = Factor[j].getElementsByTagName('button')
                                for (let k = 0 ; k < Num.length ; k++) {
                                    if ( Num[k] === Factor[j].getElementsByClassName('checkout')[0] ) {
                                        this.allNumber[i] += ((this.factor.length - j) * ( k + 1 ));
                                    }
                                }
                            }
                        }
                    localStorage.setItem('allNumber',JSON.stringify(this.allNumber))
                    }

            // handleCheckout函数做两件事：
            // 1.给被点击的按钮一个class，使其有独特样式。
            // 2.进行运算，并把数据按顺序排列在allNumber数组里。

            // handleCheckout (item1,item2,item3) {
            //     for (let i = 0 ; i < this.list.length ; i++){
            //         if (item1 === this.list[i]){
            //             for(let j = 0 ; j < this.factor.length ; j++) {
            //                 if (item2 === this.factor[j]) {

            //                     // 为被点击的Number按钮添加class='checkout'，使其有独特的样式。
            //                     let List = document.getElementsByClassName('list')[i];
            //                     let Factor = List.getElementsByClassName('factor')[j];
            //                     let num = Factor.getElementsByClassName('number')[item3-1];
            //                     num.setAttribute('class','checkout');
            //                     // num.className === 'number' ? num.setAttribute('class','number checkout') : num.setAttribute('class','number');
            //                     // num.classList.add('checkout');

            //                     // 收集被点击的Number按钮的数值，并和相关权重一起计算，最后放置在allNumber数组里，allNumber数组的数值顺序与list数组的选项顺序一一对应。
            //                     if ( this.allNumber[i] ) {
            //                         this.allNumber[i] += (this.factor.length - j) * item3
            //                     } else {
            //                         this.allNumber[i] = (this.factor.length - j) * item3
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // },
            // 该函数检测表格是否填写完，若没填写完，则给用户一个alert弹窗提示。（其功能待完善)
            // handleReport () {
            //     if ( this.allNumber.length === this.list.length) {
            //         localStorage.setItem('allNumber',JSON.stringify(this.allNumber))
            //     } else {
            //         alert('Woo！表格还剩' + (this.list.length-this.allNumber.length) +'项没有填完？不要心急呀！')
            //     }
            // },
        },
        beforeRouteLeave (to, from , next) {
            if( document.getElementsByClassName('checkout').length < this.list.length * this.factor.length ) {
                const answer = window.confirm('喂！Σ(っ°Д°;)っ！表格还剩' + (this.list.length * this.factor.length - document.getElementsByClassName('checkout').length) + '项没有填完! 你确定要离开吗？')
                if (answer) {
                    next()
                } else {
                    next(false)
                }
            } else {
                next(true)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .content
        overflow hidden
        min-height 80.83vh
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
            .checkout
                height 25px
                width 25px
                text-align center
                color #333333
                background yellow
                border 2px solid #f2c200
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
    .goto
        color #5a5a5a
</style>
