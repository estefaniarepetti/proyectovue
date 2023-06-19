<template>
<div>
    <div class="container">
        <div class="item item1">
            <a href="#">
                <h4> Envios</h4>
            </a>
            <p> Retira GRATIS en tu local mas cercano o lo enviamos a domicilio</p>
        </div>
        <div class="item item2">
            <a href="#">
                <h4> Todos los medios de pago</h4>
            </a>
            <p> Pagá seguro a través de MercadoPago, TodoPago o transferencia bancaria</p>

        </div>
        <div class="item item3">
            <a href="#">
                <h4 > Descuentos a Socios</h4>
            </a>
            <p> Comprá los miercoles con 15% de descuento. Martes a sábado 10% OFF.</p>

        </div>

    </div>
 </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin-top:50px;
    opacity: 90%;
}
.item {
    display: flex;
    flex-direction: column;
    border: 1px solid #fff;
    border-radius: 25px;
    width: 80%;
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    font-size: .75em;
    width: 100%;
    letter-spacing: .02em;
    padding: 5px 15px 0;
    text-transform: uppercase;
    margin-bottom: 25px;
    margin-top:40px;
    color:aliceblue;
    background-color: rgba(255, 255, 255, 0.2);
}
</style>