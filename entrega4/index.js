const { createApp } = Vue;

// Definimos el componente MyComponent
const MyComponent = {
  props: ['info'],
  template: `
    <tr>
      <td :style="{ color: info.textColor, background: info.backgroundColor }">{{ info.name }}</td>
      <td :style="{ color: info.textColor, background: info.backgroundColor }">: {{ info.age }}</td>
      <td :style="{ color: info.textColor, background: info.backgroundColor }">, {{ info.gender }}.</td>
    </tr>
  `
};

// Instanciamos la aplicación Vue
const app = createApp({
  data() {
    return {
      data: [
        { name: 'Lionel Messi', age: 35, gender: 'Masculino', textColor: 'white', backgroundColor: '#b4dec1' },
        { name: 'Diego Milito', age: 43, gender: 'Masculino', textColor: 'black', backgroundColor: '#afab50' },
        { name: 'Licha Lopez  ', age: 40, gender: 'Masculino', textColor: 'white', backgroundColor: '#169d99' }
      ]
    };
  }
});

app.component('my-component', MyComponent);

app.mount('#app');