<template>
    <div class="home-guide">
        <div class="guide">
                <div class="title">What is it ?</div>
                <div class="content">人们在做复杂的决策时，
                    由于相关因素过多，总是难以梳理个人对事物的态度，
                    导致难以作出最优决策。改工具旨在为使用者解决面对多个选择时，
                    量化个人对每个选择的综合态度，帮助使用者做出选择。</div>
                <div class="title">How to use it ?</div>
                <div class="content">
                    <ul>
                        <li>1.写出目前面对的难题，如：晚餐吃什么？</li>
                        <li>2.列出关于问题可供选择的解决方案，如：火锅、拉面...</li>
                        <li>3.列出左右你做出选择的相关因素，并按重要性排序，如：距离、价格、味道</li>
                        <li>4.对选项的每个相关因素进行打分，如，火锅：味道 8分</li>
                        <li>5.生成分析报告</li>
                    </ul>
                </div>
                <button @click="handleClick(make)" v-show="make" class="go"><span> Go </span></button>
                <used v-show="!make" class="goon"></used>
            </div>
        </div>
</template>

<script>
    import Used from './used'
    export default {
        name: 'HomeGuide',
        components : {
            Used
        },
        data () {
            return {
                make: true
            }
        },
        methods: {
            handleClick(make) {
                this.make = !make;
                return make
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .guide
        overflow hidden
        min-height 506px
        padding 0px 40px
        background cadetblue
        color white
        .title
            padding 10px
            padding-top 20px
            font-size 50px
        .content
            padding 10px
            line-height 25px
            font-size 18px
        .go
            width 100px
            height 50px
            margin-top 20px
            padding 2px
            border-radius 20px
            font-size 24px
        .go:hover
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.20),0 17px 50px 0 rgba(0,0,0,0.15)
        .goon
            margin-top 40px
            margin-bottom 60px
            min-height 200px
            padding 15px
            padding-bottom 30px
</style>
