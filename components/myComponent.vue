<script setup>
const entry = useState('entry');

useHead({
  title: entry.value.entryTitle,
});
</script>
<template>
  <div>
    <h1>{{ entry.entryTitle }}</h1>
    <p>Entry id: {{ entry.sys.id }}</p>
    <p>{{ new Date(entry.dateAndTime).toLocaleString('en-GB') }}</p>
  </div>
</template>
