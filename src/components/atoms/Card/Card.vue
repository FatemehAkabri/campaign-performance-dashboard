<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="card p-4 bg-white rounded-lg shadow-md mb-4">
    <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>
