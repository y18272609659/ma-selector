<template>
    <div class="result">
        <home-header></home-header>
        <div class="background">
            <div class="content">
                <div class="title">测评报告</div>
                <div class="question">
                    <span>关于难题"</span>
                    {{question}}
                    <span>"的测评报告</span>
                </div>
                <div class="list" v-for="(item,index) of list" :key="index">{{item}}
                    <div class="allNumber">
                        {{allNumber[index]}}分
                        <div class="oblong" :style="'width:'+ allNumber[index] * 8 +'px'"></div>
                    </div>

                </div>
            </div>
        </div>
        <home-footer></home-footer>
    </div>
</template>

<script>
    import HomeHeader from '../Hello/component/header'
    import HomeFooter from '../Hello/component/footer'
    export default {
        name: 'Result',
        data() {
            return {
                question: localStorage.getItem('question'),
                list: JSON.parse(localStorage.getItem('list')),
                factor: JSON.parse(localStorage.getItem('factor')),
                allNumber: JSON.parse(localStorage.getItem('allNumber'))
            }
        },
        components: {
            HomeHeader,
            HomeFooter
        },
        // mounted: function () {
        //     for (let i = 0 ; i < this.list.length ; i++){
        //         let list = document.getElementsByClassName('list')[i];
        //         let allNamber = list.getElementsByClassName('allNumber')[i];
        //         let oblong = allNamber.getElementsByClassName('oblong');
        //         console.log(oblong)
        //         let num = this.allNumber[i]
        //         oblong.style.width = num + "px";
        //     }
        // },
    }
</script>

<style lang="stylus" scoped>
    .background
        overflow hidden
        min-height 80.83vh
        background #e8e8e8
        .content
            overflow hidden
            min-height 500px
            margin 3px 0
            background white
            .title
                font-size 30px
                padding 30px
                color cadetblue
            .question
                font-size 20px
                padding 0 0 20px 30px
            .list
                margin 0 auto
                padding  30px 0 30px 30px
                font-size 16px
                font-weight bold
                color #5c5c5c
            .allNumber
                display inline-block
                padding 0 10px
            .oblong
                margin-left 10px
                display inline-block
                background -webkit-linear-gradient(left top, skyblue , cadetblue); /* Safari 5.1 - 6.0 */
                background -o-linear-gradient(bottom right, skyblue , cadetblue); /* Opera 11.1 - 12.0 */
                background -moz-linear-gradient(bottom right, skyblue , cadetblue); /* Firefox 3.6 - 15 */
                background linear-gradient(to bottom right, skyblue , cadetblue); /* 标准的语法 */
                border-radius 10px
                height 16px
</style>
