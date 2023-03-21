import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/pedidos',
        name: 'PedidosView',
        component: () => import('../views/Pedidos.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router