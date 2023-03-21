<template>
    <MessageComp :msg="msg" v-show="msg"/>
   <div id="burger-table">
    <div>
        <div id="burger-table-heading">
            <div class="order-id">N°</div>
            <div>Cliente:</div>
            <div>Pão:</div>
            <div>Carne:</div>
            <div>Opcionais:</div>
            <div>Ações:</div>
        </div>
    </div>
   </div>
   <div id="burger-table-rows">
    <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.nome }}</div>
        <div>{{ burger.pao  }}</div>
        <div>{{ burger.carne }}</div>
        <div>
            <ul>
                <li v-for="(opcional, index) in burger.opcionais" :key="index">
                    {{ opcional }}
                </li>
            </ul>
        </div>
        <div>
            <select name="status" class="status" @change="editarBurgers($event, burger.id)">
                <option v-for="index in status" :key="index.id" :value="index.tipo" :selected="burger.status == index.tipo">
                    {{ index.tipo }}
                </option>
            </select>
            <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
        </div>
    </div>
   </div>
</template>

<script>
    import MessageComp from './Message.vue';
    export default {
        name: "DashboardComp",
        data() {
            return {
                burgers: null,
                burgers_id: null,
                status: [],
                msg: null
            }
        },

        components: {
            MessageComp
        },

        methods: {
            async pegarPedidos() {
                const req = await fetch("http://localhost:3000/burgers");
                const data = await req.json();
                this.burgers = data;

                // resgatar status
                this.pegarStatus();
            },

            async pegarStatus() {
                const req = await fetch("http://localhost:3000/status");
                const data = await req.json();
                this.status = data;
            },

            async deleteBurger(id) {
                const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                    method: "DELETE"
                });

                const res = await req.json();
                console.log(res)
                // msg
                this.msg = `Pedido removido com sucesso`;
                // limpar msg
                setTimeout(() => this.msg = "", 3000);

                this.pegarPedidos();
            },

            async editarBurgers(event, id) {
                const option = event.target.value;
                const dataJson = JSON.stringify({
                    status: option
                });
                const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: dataJson
                });
                const res = await req.json();
                console.log(res)
                // msg
                this.msg = `Pedido N${res.id} foi atualizado para ${res.status} com sucesso`;
                // limpar msg
                setTimeout(() => this.msg = "", 3000);


            }
        },

        mounted() {
            this.pegarPedidos();
        }
    }
</script>

<style scoped>
    #burger-table {
        max-width: 1200px;
        margin: 0 auto;

    }

    #burger-table-heading,
    #burger-table-rows, 
    .burger-table-row {
        display: flex;
        flex-wrap: wrap;
    }

    #burger-table-heading {
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;
    }

    #burger-table-heading div,
    .burger-table-row div {
        width: 17%;

    }

    .burger-table-row {
        width: 100%;
        padding: 12px;
        border-bottom: 3px solid #CCC;
    }

    #burger-table-heading .order-id,
    .burger-table-row .order-number {
        width: 5%;
    }

    select {
        padding: 10px 4px;
        margin-right: 6px;
        border-radius: 6px;
    }
    .delete-btn {
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
        border-radius: 9px;
    }

    .delete-btn:hover {
        background-color: transparent;
        color: #222;
        
    }

    @media only screen and (max-width: 768px) {
        #burger-table-heading div,
        .burger-table-row div {
            width: 100%;
        }

        #burger-table-heading .order-id,
        .burger-table-row .order-number {
            display: none;
        }

        select {
            padding: 10px 4px;
            margin-right: 6px;
            border-radius: 6px;
        }



}


</style>


