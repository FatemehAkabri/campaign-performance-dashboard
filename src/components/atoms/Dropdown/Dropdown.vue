<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dropdown",
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    emitSelection(event: Event) {
      const value = (event.target as HTMLSelectElement).value;
      this.$emit("update:modelValue", value);
    },
  },
});
</script>

<template>
  <div class="mb-4">
    <label :for="label" class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </label>
    <div class="relative">
      <select
        :id="label"
        class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition ease-in-out duration-150"
        :value="modelValue"
        @change="emitSelection"
      >
        <option value="" disabled>Please select an option</option>
        <option
          v-for="option in options"
          :key="option"
          :value="option"
          class="text-gray-900"
        >
          {{ option }}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select::-ms-expand {
  display: none;
}
</style>
