
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="App vue"/>
    <EntregaComp /> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import EntregaComp from './components/EntregaComp.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    EntregaComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
