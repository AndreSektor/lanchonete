<template>
  <NavbarComp :logo="logo_src" :alt="app_name"/>
  <router-view />
  <FooterComp />
</template>

<script>
  import NavbarComp from './components/Navbar.vue';
  import FooterComp from './components/Footer.vue';

  export default {
    components: {
      NavbarComp,
      FooterComp
    },
    data() {
      return {
        logo_src: "/img/logo.png",
        app_name: "Monte seu hamburger"
      }
    }
  }
</script>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
