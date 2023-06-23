<template>
    <div>
      <b-container fluid>
        <b-row>
          <b-col></b-col>
          <b-col>
            <!-- Formulario -->
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.nombre"
                  type="text"
                  placeholder="Tu nombre"
                  required
                ></b-form-input>
              </b-form-group>
  
              <b-form-group id="input-group-2" label="Apellido:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.apellido"
                  type="text"
                  placeholder="Tu apellido"
                  required
                ></b-form-input>
              </b-form-group>
  
              <b-form-group id="input-group-3" label="Edad:" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="form.edad"
                  type="number"
                  placeholder="Tu edad"
                  required
                ></b-form-input>
              </b-form-group>
  
              <b-form-group id="input-group-4" label="¿Eres socio?" label-for="input-4">
                <b-form-radio-group v-model="form.socio" required>
                  <b-form-radio value="si">Sí</b-form-radio>
                  <b-form-radio value="no">No</b-form-radio>
                </b-form-radio-group>
              </b-form-group>
  
              <b-form-group v-if="form.socio === 'si'" id="input-group-5" label="Número de socio:" label-for="input-5">
                <b-form-input
                  id="input-5"
                  v-model="form.numeroSocio"
                  type="text"
                  placeholder="Tu número de socio"
                ></b-form-input>
              </b-form-group>
  
              <b-button type="submit" variant="primary">Enviar</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "FormComponent",
    data() {
      return {
        form: {
          nombre: "",
          apellido: "",
          edad: null,
          socio: null,
          numeroSocio: ""
        }
      };
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        // Realiza las acciones necesarias al enviar el formulario
        // Puedes acceder a los valores ingresados en this.form
        console.log(this.form);
      },
      onReset(event) {
        event.preventDefault();
        this.form.nombre = "";
        this.form.apellido = "";
        this.form.edad = null;
        this.form.socio = null;
        this.form.numeroSocio = "";
        // Resetea los valores de los campos adicionales si los tienes
      }
    }
  };
  </script>
  
  <style scoped>
  .cabecera {
    height: 80px;
  }
  
  form {
    color: antiquewhite;
    margin-top: 130px;
    margin-bottom: 70px;
  }
  
  button {
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  </style>