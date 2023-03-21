<template>
    <footer id="footer">
        <p>Monte seu Hamburguer &reg; 2023</p>
    </footer>
</template>

<script>

    export default {
        name: "FooterComp"
    }
</script>

<style>
    #footer {
        height: 200px;
        background-color: #222;
        border-top: 4px solid #111;
        color: #FBCA03;
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: center;
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        #footer {
            height: 10%;
            background-color: #222;
            border-top: 0.4em solid #111;
            color: #FBCA03;
            display: flex;
            align-items: center;
            justify-items: center;
            justify-content: center;
            width: 100%;
}
}
</style>