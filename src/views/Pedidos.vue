<template>
    <div class="main-container">
        <h1>Gerenciar pedidos</h1>
        <DashboardComp />
    </div>
</template>

<script>
    import DashboardComp from '../components/Dasboard.vue';

    export default {
    name: "PedidosView",
    components: { 
        DashboardComp 
    }
}
</script>