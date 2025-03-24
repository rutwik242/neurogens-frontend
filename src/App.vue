<template>
    <div class="app">
      <header class="app-header">
        <h1>🛍️ NEUROGENS</h1>
        <p>AI-Powered Product Catalog Generator</p>
      </header>
  
      <main>
        <UploadForm />
        <CatalogViewer />
      </main>
  
      <footer class="footer">
        <p>Made with ❤️ using Vue + Flask + Gemini</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import UploadForm from './components/UploadForm.vue'
  import CatalogViewer from './components/CatalogViewer.vue'
  </script>
  
  <style scoped>
  .app {
    max-width: 1000px;
    margin: auto;
    padding: 2rem;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .app-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .app-header h1 {
    font-size: 2.8rem;
    margin: 0;
    color: #4f46e5;
  }
  
  .app-header p {
    font-size: 1.2rem;
    color: #555;
  }
  
  .footer {
    margin-top: 3rem;
    text-align: center;
    color: #888;
    font-size: 0.9rem;
  }
  </style>
  