<template>
  <div>
    <h1>Contactanos</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nombre">Nombre:</label>
        <input id="nombre" placeholder="Nombre" type="text" v-model="nombre" required>
      </div>
      <div>
        <label for="apellido">Apellido:</label>
        <input id="apellido" placeholder="Apellido" type="text" v-model="apellido" required>
      </div>
      <div>
        <label for="sexo">Sexo:</label>
        <select id="sexo" v-model="sexo" required>
          <option value="">Seleccione</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">No me identifico con ninguno</option>
        </select>
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" placeholder="Email" v-model="email" required>
      </div>
      <div>
        <label for="contrasena">Contraseña:</label>
        <input id="contrasena" placeholder="Contraseña" type="password" v-model="contrasena" required>
      </div>
      <div>
        <label for="socio">¿Sos socio?</label>
        <input id="socio" type="checkbox" v-model="esSocio">
      </div>
      <div v-if="esSocio">
        <label for="numSocio">Número de socio:</label>
        <input id="numSocio" type="number"  placeholder="Numero de Socio" v-model="numSocio" required>
      </div>
      <div>
        <button type="submit" class="btn">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      sexo: '',
      email: '',
      contrasena: '',
      esSocio: false,
      numSocio: ''
    };
  },
  methods: {
    submitForm() {
      // datos del formulario
      console.log('Formulario enviado');
      console.log('Nombre:', this.nombre);
      console.log('Apellido:', this.apellido);
      console.log('Sexo:', this.sexo);
      console.log('Email:', this.email);
      console.log('Contraseña:', this.contrasena);
      console.log('¿Sos socio?', this.esSocio);
      if (this.esSocio) {
        console.log('Número de socio:', this.numSocio);
      }
    }
  }
};
</script>

<style scoped>
form div {
  margin-bottom: 10px;
}
label {
  display: block;
  font-weight: bold;
}
</style>