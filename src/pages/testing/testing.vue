<template>
    <div class="testing">
        <home-header></home-header>
        <div>123</div>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from '../Hello/component/header'
import HomeFooter from '../Hello/component/footer'
    export default {
        name: 'Testing',
        components: {
            HomeHeader,
            HomeFooter
        }
    }
</script>
