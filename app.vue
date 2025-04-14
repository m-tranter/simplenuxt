<script setup lang="ts">
const entryId = useState('entryId', () => useRoute().query.entryId);
const entry = useState('entry', () => undefined);

useRouter().push({ query: {} });

const client = useClient();

await callOnce(async () => {
  let { data } = await useAsyncData('data', () =>
    client.entries.get(entryId.value)
  );
  if (data.value) {
    entry.value = data.value;
  }
});
</script>
<template>
  <div class="container-fluid p-0">
    <MyHeader />
    <div class="mt-4 container">
      <MyComponent />
    </div>
    <MyFooter />
  </div>
</template>
