<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Home</router-link> 
        <router-link to="/pedidos">Pedidos</router-link>
    </div>    
</template>

<script>
    export default {
        name: "NavbarComp",
        props: ["logo", "alt"]
    }
</script>

<style scoped>
    #nav {
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;  
       

    }

    #nav #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #logo {
        width: 40px;
        height: 40px;
    }

    #nav a {
        color: #FCBA03;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    #nav a:hover {
        color: #FFF;

    }

    @media only screen and (max-width: 768px) {
    #nav {
        flex-direction: column;
        padding: 15px;
        max-width: 1200px;
        margin: 0 auto;
    }

    #nav #logo-url {
        margin: 0;
        margin-bottom: 20px;
        max-width: 200px;
    }

    #nav a {
        margin: 8px 0;
        display: block;
    }
}


</style>