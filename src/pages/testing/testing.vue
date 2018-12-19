<template>
    <div class="testing">
        <home-header></home-header>
        <div class="content">
            <div class="question">
                <span>目前面对的难题:</span>
                {{question}}
            </div>
            <div class="list" v-for="(item1,index) of list" :key="index"><span>关于</span>{{item1}}
                <br/>
                <div v-for="(item2,index) of factor" :key="index" class="factor">{{item2}}</div>
            </div>
            <button>complete</button>
        </div>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from '../Hello/component/header'
import HomeFooter from '../Hello/component/footer'
import store from '../../store'
    export default {
        name: 'Testing',
        components: {
            HomeHeader,
            HomeFooter
        },
        data() {
            return {
                question: store.fetchOne(),
                list: store.fetchTwo(),
                factor: store.fetchThree(),
            }
        },
        created: function () {
            console.log(this.list)
            console.log(this.factor)
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
            line-height 2rem
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
</style>
