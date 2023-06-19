<template>
    <div>
      <footer class="footer mt-auto py-3 bg-dark">
        <div class="container">
          <p class="footer-nav">
            <a href="/#">Privacidad</a>
            ·
            <a href="/#">Terminos y condiciones</a>
            ·
            <a href="/#">Formas de pago </a>
            ·
            <a href="/#">Sucursales </a>
            ·
            <a href="/#">Contacto </a>
      
          </p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
 .footer {
  color: white;
}

.social-icons {
  margin-left: 10px;
}

.social-icons a {
  margin-right: 10px;
}
  </style>