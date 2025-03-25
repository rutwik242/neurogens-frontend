<template>
    <div class="viewer">
      <h2>📦 Catalog Preview</h2>
      <div v-if="entries.length">
        <div v-for="(entry, index) in entries" :key="index" class="catalog-card">
          <h3>{{ entry.filename }}</h3>
          <pre>{{ entry.catalog_entry }}</pre>
        </div>
      </div>
      <div v-else>
        <p>No entries to display yet.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CatalogViewer',
    props: ['entries']
  }
  </script>
  
  <style scoped>
  .viewer {
    margin: 2rem auto;
    max-width: 800px;
  }
  
  .catalog-card {
    background-color: #f0f0f0;
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  </style>
  