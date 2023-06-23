<template>
  <div id="form">
    <b-navbar class="navbar navbar-expand-lg fixed-top navbar-scroll">
      <div class="container-fluid">
        <b-navbar-brand href="#" @click="backToHome">
          Racing Club de Avellaneda
        </b-navbar-brand>
        <p class="icon">
          <a href="#">
            <img
              src="https://locademia.racingclub.com.ar/Pubs/Sites/Default/Images/logo2.png"
              class="img"
            />
          </a>
        </p>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-dropdown text="Informacion" right>
          <div id="info">
            <b-dropdown-item href="#">Temporada 2023</b-dropdown-item>
            <b-dropdown-item href="#">Temporadaras Anteriores</b-dropdown-item>
            <b-dropdown-item href="#">Accesorios</b-dropdown-item>
            <b-dropdown-item href="#">¿Como me hago socio?</b-dropdown-item>
          </div>
        </b-dropdown>

        <b-navbar-nav>
          <b-nav-item href="#" id="nav-collapse" is-nav @click="goToLogin">
            Login
          </b-nav-item>
          <b-nav-item @click="toggleForm">Formulario</b-nav-item>
        </b-navbar-nav>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-button v-b-toggle.sidebar-cart class="nav-btn">
              <b-icon icon="cart" class="nav-icon"></b-icon>
              <div v-if="cartQ > 0" class="cart-dot">
                <p class="cart-total">{{ cartQ }}</p>
              </div>
            </b-button>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: {
    cartQ: {
      type: Number,
    },
    logged: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    goToLogin() {
      this.$emit("goToLogin", true);
    },
    backToHome() {
      this.$emit("backHome");
    },
    toggleForm() {
      this.$emit("toggleForm");
    },
  },
};
</script>


  
  <style scoped>
  .navbar {
    width: 100%;
    min-width: 20rem;
    min-height: 4rem;
    z-index: 9;
    color: #042943 ;
    background: rgba(241, 241, 241, 0.676);
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-scrolled .nav-link,
  .navbar-scrolled .navbar-toggler .fa-bars {
    background: rgba(241, 241, 241, 0.676);
  }
  
  .navbar-light .navbar-brand {
    color: #00a4e3;
  }
  
  .nav-icon {
    color: white;
  }
  #info{
    background-color: #00a4e3 ;
    border-color: #00a4e3;
  }

  button {
    border-radius: 50%;
    margin-left: 0.5rem;
    background-color: #00a4e3 ;
    border-color: #00a4e3;
    padding: 13px;
  }
  
  .button-content {
    border-radius: 50%;
    margin-left: 1rem;
    background-color: #00a4e3;
    border-color: #00a4e3;
  }
  
  .cart-dot {
    height: 1.8rem;
    width: 1.8rem;
    background-color: #5ddfdf;
    border-radius: 50%;
    z-index: 3;
    position: absolute;
    bottom: 1.8rem;
    right: 0.4rem;
  }
  
  .cart-total {
    color: #fff;
    font-size: 1rem;
    text-align: center;
    margin-top: 2px;
  }

  .img{
    width:40px;
    margin-right: 10px;
  }

  
  </style>