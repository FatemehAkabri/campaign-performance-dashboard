<script lang="ts">
import { defineComponent, computed } from "vue";
import MetricCard from "../MetricCard/MetricCard.vue";
import Table from "../../atoms/Table/Table.vue";

export default defineComponent({
  name: "MetricsDisplay",
  components: {
    MetricCard,
    Table,
  },
  props: {
    metrics: {
      type: Array,
      required: true,
    },
    selectedVacancy: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const headers = [
      "Platform",
      "Impressions",
      "Clicks",
      "Applications",
      "Cost Per Impression",
      "Cost Per Click",
      "Cost Per Application",
    ];

    const rows = computed(() =>
      props.metrics.map((platform) => ({
        Platform: platform.name,
        Impressions: platform.metrics.impressions,
        Clicks: platform.metrics.clicks,
        Applications: platform.metrics.applications,
        "Cost Per Impression": platform.metrics.costPerImpression,
        "Cost Per Click": platform.metrics.costPerClick,
        "Cost Per Application": platform.metrics.costPerApplication,
      }))
    );

    const platforms = computed(() =>
      props.metrics.map((platform) => platform.name)
    );

    const platformColors = [
      "#42A5F5", // Meta
      "#66BB6A", // Google
      "#FFA726", // TikTok
    ];

    const metricsList = computed(() => [
      {
        title: "Impressions",
        data: props.metrics.map((platform) => platform.metrics.impressions),
      },
      {
        title: "Clicks",
        data: props.metrics.map((platform) => platform.metrics.clicks),
      },
      {
        title: "Applications",
        data: props.metrics.map((platform) => platform.metrics.applications),
      },
      {
        title: "Cost Per Impression",
        data: props.metrics.map(
          (platform) => platform.metrics.costPerImpression
        ),
      },
      {
        title: "Cost Per Click",
        data: props.metrics.map((platform) => platform.metrics.costPerClick),
      },
      {
        title: "Cost Per Application",
        data: props.metrics.map(
          (platform) => platform.metrics.costPerApplication
        ),
      },
    ]);

    return {
      headers,
      rows,
      platforms,
      metricsList,
      platformColors,
    };
  },
});
</script>

<template>
  <div class="metrics-table p-4 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">
      Metrics for {{ selectedVacancy }} Position
    </h2>

    <Table class="pb-4" :headers="headers" :rows="rows" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <MetricCard
        v-for="metric in metricsList"
        :key="metric.title"
        :title="metric.title"
        :data="metric.data"
        :platforms="platforms"
        :colors="platformColors"
      />
    </div>
  </div>
</template>

<style scoped>
.metrics-table {
  margin-top: 20px;
  border: 1px solid #ded9d9;
}
.grid {
  display: grid;
  gap: 1rem;
}
</style>
