<template>
    <div>
        <MessageComp :msg="msg" v-show="msg"/>
        <div>
            <form id="burger-form" @submit="criarHamburger">
                <div class="input-container">
                    <label for="nome">Nome do cliente:</label>
                    <input type="text" id="nome" name="name" v-model="nome" placeholder="Digite o seu nome">
                </div>
                <div class="input-container">
                    <label for="pao">Escolha seu pão:</label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="">Selecione seu pão</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
                            {{ pao.tipo }}
                        </option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="carne">Selecione sua carne:</label>
                    <select name="carne" id="carne" v-model="carne">
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
                            {{ carne.tipo }}
                        </option>
                        <option value="maminha">Maminha</option>
                    </select>
                </div>
                <div id="opcionais-container" class="input-container">
                    <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
                    <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
                        <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                        <span>{{ opcional.tipo }}</span>
                    </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar meu burger!">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import MessageComp from './Message.vue';

    export default {
        name: "BurgerFormComp",
        data() {
            return {
                paes: null,
                carnes: null,
                opcionaisdata: null,
                nome: null,
                pao: null,
                carne: null,
                opcionais: [],
                status: "Solicitado",
                msg: null
            }
        },

        methods: {
          async pegarIngredientes() {
            const req = await fetch("http://localhost:3000/ingredientes");
            const data = await req.json();
            
            this.paes = data.paes;
            this.carnes = data.carnes;
            this.opcionaisdata = data.opcionais;

          },
          async criarHamburger(evento) {
            evento.preventDefault();

            const data = {
                nome: this.nome,
                carne: this.carne,
                pao: this.pao,
                opcionais: Array.from(this.opcionais),
                status: "Solicitado"
            }
            const dataJson = JSON.stringify(data);

            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: dataJson
            });

            const res = await req.json();

            // colocar uma msg de sistema
            this.msg = `Pedido N°${res.id} realizado com sucesso`;
            // limpar msg
            setTimeout(() => this.msg = "", 3000);
            // limpar os campos
            this.nome = "";
            this.carne = "";
            this.paes = "";
            this.opcionais = "";
    
          }      
        },
        // quando o componente for montado "Mounted" ele pegar os ingredientes
        mounted() {
            this.pegarIngredientes()
        },

        components: {
            MessageComp
        }
    }

</script>

<style scoped>
    #burger-form {
        max-width: 400px;
        margin: 0 auto;

    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
    }

    input, select {
        padding: 5px 10px;
        width: 300px;
    }

    #opcionais-container {
        flex-direction: row;
        flex-wrap: wrap;
    }

    #opcionais-title {
        width: 100%;

    }

    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }

    .checkbox-container span,
    .checkbox-container input {
        width: auto;
    }

    .checkbox-container span {
        margin-left: 6px;
        font-weight: bold;
    }

    .submit-btn {
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

    .submit-btn:hover {
        background-image: url('../../public/favicon.ico');
        color: white;
    }
</style>