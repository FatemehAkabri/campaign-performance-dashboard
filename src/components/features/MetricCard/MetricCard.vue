<script lang="ts">
import { defineComponent, computed } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors,
} from "chart.js";
import Card from "../../atoms/Card/Card.vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Colors
);

export default defineComponent({
  name: "MetricCard",
  components: {
    Bar,
    Card,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    platforms: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const chartData = computed(() => ({
      labels: props.platforms,
      datasets: [
        {
          label: props.title,
          backgroundColor: props.colors,
          data: props.data,
        },
      ],
    }));

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return {
      chartData,
      chartOptions,
    };
  },
});
</script>

<template>
  <Card :title="title">
    <div class="chart-container">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </Card>
</template>

<style scoped>
.chart-container {
  position: relative;
  height: 300px;
}
</style>
