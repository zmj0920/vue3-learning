<template>
  <div>
    <SlotItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>
    </SlotItem>
  </div>
</template>
<script setup lang="ts">
  import SlotItem from '../components/SlotItem.vue';
  import DocumentationIcon from '../components/icons/IconDocumentation.vue';
</script>
