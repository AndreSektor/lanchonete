<template>
    <div id="main-banner">
        <h4>Monteu seu hamburguer</h4>
    </div>
</template>

<script>
    export default {
        name: "BannerComp"
    }

</script>

<style scoped>
    #main-banner {
        background-image: url('../../public/img/burger.jpeg');
        background-position: center;
        background-size: cover;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #main-banner h4 {
        color: #FFF;
        text-align: left;
        font-size: 60px;
        background-color: #222;
        padding: 20px 10px;
        display: flex;
    }

    @media only screen and (max-width: 768px) {
        #main-banner h4 {
            font-size: 40px;
        }
    }
</style>




