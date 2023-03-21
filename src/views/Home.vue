<template>
    
    <div class="main-container">
        <h1>Monte o seu hamburger:</h1>
        <BannerComp />
    </div>
    <BurgerFormComp />
</template>

<script>
    import BannerComp from '../components/Banner.vue'
    import BurgerFormComp from '../components/BurgerForm.vue'

    export default {
        name: "HomeView",
        components: {
            BannerComp,
            BurgerFormComp
        }
    }
</script>