<template>
    <div>
      <h2>Registro</h2>
  
      <form @submit="register">
        <div>
          <label for="username">Nombre de usuario:</label>
          <input type="text" id="username" v-model="form.username" required />
        </div>
  
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="form.password" required />
        </div>
  
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterComponent",
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
      };
    },
    methods: {
      register(event) {
        event.preventDefault();
  
        const newUser = {
          username: this.form.username,
          password: this.form.password,
        };
  
        this.$emit("registered", newUser);
  
       //limpiar contenido
        this.form.username = "";
        this.form.password = "";
      },
    },
  };
  </script>
  