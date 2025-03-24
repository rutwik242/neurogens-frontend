<template>
    <div class="catalog-viewer">
      <h2>📋 Saved Catalog Entries</h2>
  
      <button @click="downloadPDF" class="download-btn">📄 Download PDF</button>
  
      <div v-if="loading">Loading entries...</div>
      <div v-if="!entries.length && !loading" class="empty-msg">No entries found yet.</div>
  
      <div v-for="entry in entries" :key="entry.filename" class="entry-card">
        <strong>{{ entry.product_name }}</strong>
        <p><em>{{ entry.category }}</em></p>
        <pre>{{ entry.catalog_entry }}</pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const entries = ref([])
  const loading = ref(true)
  
  onMounted(async () => {
    try {
      const res = await axios.get("http://localhost:5000/entries")
      entries.value = res.data
    } catch (err) {
      console.error("Failed to fetch entries:", err)
    } finally {
      loading.value = false
    }
  })
  
  function downloadPDF() {
    window.open("http://localhost:5000/export_pdf", "_blank")
  }
  </script>
  
  <style scoped>
  .catalog-viewer {
    padding: 1.5rem;
    background: #f0fdf4;
    border-radius: 12px;
    margin-top: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  }
  .download-btn {
    margin-bottom: 1rem;
    padding: 8px 16px;
    font-weight: bold;
    background: #059669;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  .entry-card {
    background: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-left: 4px solid #059669;
    border-radius: 8px;
  }
  pre {
    white-space: pre-wrap;
    font-size: 0.9rem;
  }
  .empty-msg {
    font-style: italic;
    color: #666;
  }
  </style>
  