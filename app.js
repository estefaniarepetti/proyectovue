// createApp
// destructuring

const {createApp} = Vue;

createApp({
    data (){// almacena los datos

return {
    titulo: "Primera entrega",
    contador: 0, 
    error: 0,
    
}
    },

    methods: {
        incrementa() {
          this.contador++;
        },
        disminuye() {
          if (this.contador > 0) {
            this.contador--;
          }
        }
      }
    
}).mount("#app")