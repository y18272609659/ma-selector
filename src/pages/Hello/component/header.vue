<template>
    <div class="header">
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
        .header-hello
            width 40px
            display inline-block
            color white
            padding-left 20px
            font-size 18px
            text-align center
        .header-about
            display inline-block
            flex-grow 1
            text-align center
            color #36585a
</style>
