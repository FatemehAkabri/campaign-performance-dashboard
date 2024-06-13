<script lang="ts">
import { defineComponent } from "vue";
import Dropdown from "../../atoms/Dropdown/Dropdown.vue";

export default defineComponent({
  name: "CampaignSelector",
  components: {
    Dropdown,
  },
  props: {
    campaigns: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedVacancy: "",
    };
  },
  methods: {
    updateSelectedVacancy(value: string) {
      this.selectedVacancy = value;
      this.$emit("update:selectedVacancy", value);
    },
  },
});
</script>

<template>
  <div>
    <Dropdown
      label="Select Vacancy"
      :options="campaigns.map((campaign) => campaign.vacancy)"
      :modelValue="selectedVacancy"
      @update:modelValue="updateSelectedVacancy"
    />
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
