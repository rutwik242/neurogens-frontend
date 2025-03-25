<template>
  <div id="app">
    <header class="header">
      <h1>🧠 Neurogens Catalog Generator</h1>
      <p>Upload product images and generate AI-powered catalogs with Gemini + Flask</p>
    </header>

    <UploadForm />
  </div>
</template>

<script>
import UploadForm from './components/UploadForm.vue'

export default {
  name: 'App',
  components: {
    UploadForm
  }
}
</script>

<style scoped>
#app {
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  background: #f4f4f4;
  min-height: 100vh;
  text-align: center;
}

.header {
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
</style>
