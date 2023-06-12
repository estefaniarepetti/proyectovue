<template>
    <div id="app">
      <table :style="{ color: textColor, background: backgroundColor }">
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [
          { name: 'John Doe', age: 25, gender: 'Male' },
          { name: 'Jane Smith', age: 30, gender: 'Female' },
          { name: 'Bob Johnson', age: 35, gender: 'Male' }
        ],
        textColor: 'white',
        backgroundColor: 'blue'
      };
    }
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  td {
    padding: 8px;
    text-align: left;
  }
  </style>