<script lang="ts">
import { defineComponent, computed } from "vue";
import Card from "../../atoms/Card/Card.vue";

export default defineComponent({
  name: "Overview",
  components: {
    Card,
  },
  props: {
    metrics: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  setup(props) {
    const totalImpressions = computed(() =>
      props.metrics.reduce((total, campaign) => {
        return (
          total +
          campaign.platforms.reduce((subTotal, platform) => {
            return subTotal + (platform.metrics.impressions || 0);
          }, 0)
        );
      }, 0)
    );

    const totalClicks = computed(() =>
      props.metrics.reduce((total, campaign) => {
        return (
          total +
          campaign.platforms.reduce((subTotal, platform) => {
            return subTotal + (platform.metrics.clicks || 0);
          }, 0)
        );
      }, 0)
    );

    const totalApplications = computed(() =>
      props.metrics.reduce((total, campaign) => {
        return (
          total +
          campaign.platforms.reduce((subTotal, platform) => {
            return subTotal + (platform.metrics.applications || 0);
          }, 0)
        );
      }, 0)
    );

    const averageCostPerImpression = computed(() => {
      const totalCost = props.metrics.reduce((total, campaign) => {
        return (
          total +
          campaign.platforms.reduce((subTotal, platform) => {
            return (
              subTotal +
              (platform.metrics.costPerImpression || 0) *
                (platform.metrics.impressions || 0)
            );
          }, 0)
        );
      }, 0);
      const totalImpressions = props.metrics.reduce((total, campaign) => {
        return (
          total +
          campaign.platforms.reduce((subTotal, platform) => {
            return subTotal + (platform.metrics.impressions || 0);
          }, 0)
        );
      }, 0);
      return totalImpressions > 0 ? totalCost / totalImpressions : 0;
    });

    const averageCostPerClick = computed(() => {
      const totalCost = props.metrics.reduce((total, campaign) => {
        return (
          total +
          campaign.platforms.reduce((subTotal, platform) => {
            return (
              subTotal +
              (platform.metrics.costPerClick || 0) *
                (platform.metrics.clicks || 0)
            );
          }, 0)
        );
      }, 0);
      const totalClicks = props.metrics.reduce((total, campaign) => {
        return (
          total +
          campaign.platforms.reduce((subTotal, platform) => {
            return subTotal + (platform.metrics.clicks || 0);
          }, 0)
        );
      }, 0);
      return totalClicks > 0 ? totalCost / totalClicks : 0;
    });

    const averageCostPerApplication = computed(() => {
      const totalCost = props.metrics.reduce((total, campaign) => {
        return (
          total +
          campaign.platforms.reduce((subTotal, platform) => {
            return (
              subTotal +
              (platform.metrics.costPerApplication || 0) *
                (platform.metrics.applications || 0)
            );
          }, 0)
        );
      }, 0);
      const totalApplications = props.metrics.reduce((total, campaign) => {
        return (
          total +
          campaign.platforms.reduce((subTotal, platform) => {
            return subTotal + (platform.metrics.applications || 0);
          }, 0)
        );
      }, 0);
      return totalApplications > 0 ? totalCost / totalApplications : 0;
    });

    return {
      totalImpressions,
      totalClicks,
      totalApplications,
      averageCostPerImpression,
      averageCostPerClick,
      averageCostPerApplication,
    };
  },
});
</script>

<template>
  <div class="overview p-4 bg-gray-100 rounded-lg">
    <div class="flex flex-wrap justify-between items-center mb-4">
      <div class="flex items-center space-x-2 mb-4 sm:mb-0">
        <img
          src="../../../assets/reportLogo.png"
          alt="Report Logo"
          class="w-6 h-6 sm:hidden"
        />
        <span class="text-lg font-semibold">Overview</span>
      </div>
      <span class="ml-auto text-sm text-gray-500">Compared past 30 days</span>
    </div>
    <div class="flex flex-wrap space-x-4">
      <div
        class="flex-shrink-0 hidden sm:flex items-center justify-center w-16 h-16 rounded-full"
      >
        <img src="../../../assets/reportLogo.png" alt="Report Logo" />
      </div>
      <div class="flex-grow mx-2 w-full sm:w-auto">
        <Card title="Total Impressions">
          <p class="text-sm text-gray-600">{{ totalImpressions }}</p>
        </Card>
        <Card title="Total Clicks">
          <p class="text-sm text-gray-600">{{ totalClicks }}</p>
        </Card>
      </div>
      <div class="flex-grow mx-2 w-full sm:w-auto">
        <Card title="Total Applications">
          <p class="text-sm text-gray-600">{{ totalApplications }}</p>
        </Card>
        <Card title="Average Cost Per Impression">
          <p class="text-sm text-gray-600">
            {{ averageCostPerImpression.toFixed(2) }}
          </p>
        </Card>
      </div>
      <div class="flex-grow mx-2 w-full sm:w-auto">
        <Card title="Average Cost Per Click">
          <p class="text-sm text-gray-600">
            {{ averageCostPerClick.toFixed(2) }}
          </p>
        </Card>
        <Card title="Average Cost Per Application">
          <p class="text-sm text-gray-600">
            {{ averageCostPerApplication.toFixed(2) }}
          </p>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overview {
  background-color: #fff;
  border: 1px solid #ded9d9;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
