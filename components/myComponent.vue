<script setup>
const entry = useState('entry');
useHead({
  title: entry.value.entryTitle || 'Not found',
});
</script>
<template>
  <div>
    <div v-if="entry.entryTitle">
      <h1>{{ entry.entryTitle }}</h1>
      <p>Entry id: {{ entry.sys.id }}</p>
      <p>{{ new Date(entry.dateAndTime).toLocaleString('en-GB') }}</p>
    </div>
    <div v-else class="mb-3">
      <h1>Page not found</h1>
    </div>
  </div>
</template>
