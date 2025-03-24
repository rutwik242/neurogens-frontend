<template>
    <div class="upload-form">
      <h2>📤 Upload Product Images</h2>
      <input type="file" multiple @change="handleFiles" accept="image/*" />
      <button @click="submit" :disabled="!files.length || loading">
        {{ loading ? 'Generating...' : 'Generate Catalog' }}
      </button>
  
      <div v-if="results.length" class="results">
        <div v-for="entry in results" :key="entry.filename" class="result-card">
          <strong>{{ entry.product_name }}</strong>
          <p><em>{{ entry.category }}</em></p>
          <pre>{{ entry.catalog_entry }}</pre>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const files = ref([])
  const results = ref([])
  const loading = ref(false)
  
  function handleFiles(event) {
    files.value = Array.from(event.target.files)
  }
  
  async function submit() {
    if (!files.value.length) return
    const formData = new FormData()
    files.value.forEach(file => formData.append("images", file))
  
    loading.value = true
    try {
      const res = await axios.post("http://localhost:5000/generate_catalog", formData)
      results.value = res.data
    } catch (err) {
      alert("❌ Error generating catalog.")
      console.error(err)
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style scoped>
  .upload-form {
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  }
  input[type="file"] {
    margin-top: 0.5rem;
  }
  button {
    margin-top: 1rem;
    padding: 8px 16px;
    font-weight: bold;
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  button:disabled {
    background: gray;
    cursor: not-allowed;
  }
  .results {
    margin-top: 2rem;
  }
  .result-card {
    background: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-left: 4px solid #4f46e5;
    border-radius: 8px;
  }
  pre {
    white-space: pre-wrap;
    font-size: 0.9rem;
  }
  </style>
  