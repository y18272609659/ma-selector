<template>
    <div class="header">
        <div class="logo"></div>
        <a href="/" class="header-hello">首页</a>
        <div class="header-about">多属性选择器————做选择，更清晰，更简单</div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
    }
</script>

<style lang="stylus" scoped>
    .header
        display flex
        align-items center
        height 5rem
        background cadetblue
        .logo
            margin-left 20px
            border-left 10px solid #ff3b35
            border-right 10px solid #f2d303
            border-top 10px solid #f0f0f0
            border-bottom 10px solid #e200e4
        .header-hello
            width 40px
            display inline-block
            color white
            padding-left 5px
            font-size 18px
            text-align center
        .header-about
            display inline-block
            flex-grow 1
            text-align center
            color #36585a
</style>
