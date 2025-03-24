<template>
    <div id="app">
      <UploadForm />
    </div>
  </template>
  
  <script>
  import UploadForm from './components/UploadForm.vue';
  
  export default {
    name: 'App',
    components: {
      UploadForm
    }
  };
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #f3f3f3;
  }
  </style>
  