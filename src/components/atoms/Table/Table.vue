<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Table",
  props: {
    headers: {
      type: Array as PropType<Array<string>>,
      required: true,
    },
    rows: {
      type: Array as PropType<Array<Record<string, any>>>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="overflow-x-auto mt-4">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th
            v-for="header in headers"
            :key="header"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td
            v-for="header in headers"
            :key="header"
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
          >
            {{ row[header] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.th,
.td {
  border: 1px solid #ddd;
  padding: 8px;
}

.th {
  background-color: #f2f2f2;
  text-align: left;
}
</style>
