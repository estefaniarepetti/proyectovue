<template>
  <div id="app">
    <NavbarComponent
      :cartQ="cartQuantity"
      :logged="logged"
      @goToLogin="onGoToLogin"
      @backHome="onBackHome"
      @toggleForm="toggleForm"
    />

    <div v-if="show">
      <LoginComponent @logged="onLoginSubmit" />
    </div>

    <div v-else-if="showRegister">
      <RegisterComponent @registered="onRegistered" />
    </div>

    <div v-else-if="showForm">
      <FormComponent />
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
import FormComponent from "./components/FormComponent.vue";
import RegisterComponent from "./components/RegisterComponent.vue";

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
    FormComponent,
    RegisterComponent,
  },
  data() {
    return {
      listado: items,
      itemsCarrito: [],
      logged: false,
      show: false,
      showRegister: false,
      showForm: false,
      user: {},
      users: [
        { username: "admin", password: "1234" },
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
      ],
    };
  },
  computed: {
    cartQuantity() {
      return this.itemsCarrito.length;
    },
  },
  methods: {
    onLoginSubmit(user) {
      const validUser = this.users.find(
        (u) => u.username === user.username && u.password === user.password
      );
      if (validUser) {
        this.logged = true;
        this.user = user;
      } else {
        alert("Credenciales incorrectas");
      }
    },
    onGoToLogin() {
      this.show = true;
    },
    onBackHome() {
      this.show = false;
      this.showRegister = false;
    },
    onRegistered(user) {
      this.users.push(user);
      this.showRegister = false;
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
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>

<style></style>
