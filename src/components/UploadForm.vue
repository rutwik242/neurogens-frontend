<template>
    <div class="upload-container">
      <h2>Upload Product Images</h2>
      <input type="file" multiple accept="image/*" @change="handleFileChange" />
      <button @click="submitImages">Generate Catalog</button>
  
      <div v-if="loading">Generating catalog... Please wait.</div>
  
      <div v-if="results.length" class="results">
        <div v-for="(result, index) in results" :key="index" class="result-card">
          <h3>{{ result.filename }}</h3>
          <pre>{{ result.catalog_entry }}</pre>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        files: [],
        results: [],
        loading: false
      }
    },
    methods: {
      handleFileChange(event) {
        this.files = Array.from(event.target.files)
      },
      async submitImages() {
        if (!this.files.length) {
          alert('Please upload at least one image.')
          return
        }
  
        this.loading = true
        const formData = new FormData()
        this.files.forEach(file => {
          formData.append('images', file)
        })
  
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate_catalog`, formData)
          this.results = response.data
        } catch (err) {
          alert('Error generating catalog. Check backend.')
          console.error(err)
        } finally {
          this.loading = false
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .upload-container {
    text-align: center;
    padding: 2rem;
  }
  
  .result-card {
    background: #f9f9f9;
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    text-align: left;
  }
  </style>
  