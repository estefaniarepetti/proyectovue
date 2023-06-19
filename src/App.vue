<template>
  <div id="app">
    <NavbarComponent
      :cartQ="cartQuantity"
      :logged="logged"
      @goToLogin="onGoToLogin"
      @backHome="onBackHome"
    />    
    <div v-if="show">
      <LoginComponent @logged="onLoginSubmit" />
    </div>
    <div v-else>
      <ListadoCamiseta
        :items="listado"
        :itemsCart="itemsCarrito"
        @addToCart="onAddToCart"
      />
    </div>
    <CarritoCompras :items="itemsCarrito" @updateStock="updateStock" />
    <DetallesComponent />
        <FooterVue />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import ListadoCamiseta from "./components/ListadoCamiseta.vue";
import CarritoCompras from "./components/CarritoCompras.vue";
import FooterVue from "./components/FooterVue.vue";
import LoginComponent from "./components/LoginComponent.vue";
import DetallesComponent from "./components/DetallesComponent.vue";

import items from "@/assets/json/items.json";

export default {
  name: "App",
  components: {
    NavbarComponent,
    ListadoCamiseta,
    CarritoCompras,
    FooterVue,
    LoginComponent,
    DetallesComponent,
},
  data() {
    return {
      listado: items,
      itemsCarrito: [],
      logged: false,
      show: false,
      user: {},
    };
  },
  computed: {
    cartQuantity() {
      return this.itemsCarrito.length;
    },
  },
  methods: {
    onLoginSubmit(user) {
      this.show = false;
      this.logged = true;
      this.user = user;
    },
    onGoToLogin() {
      this.show = true;
    },
    onBackHome() {
      this.show = false;
    },
    isInCart(i) {
      return this.itemsCarrito.find(({ item }) => item.name === i.name);
    },
    updateStock(i) {
      this.listado.forEach((item) => {
        if (item.name === i.name) {
          console.log(`stock: ${item.stock}, q: ${i.q}`);
          item.stock = item.stock - i.q;
        }
      });

    },
    onAddToCart(item) {
      this.updateStock(item);
      this.itemsCarrito.push(item);
    },
  },
};
</script>

<style></style>