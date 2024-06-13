<script lang="ts">
import { defineComponent } from "vue";
import CampaignSelector from "../components/features/CampaignSelector/CampaignSelector.vue";
import campaignsData from "../campaign.json";
import MetricsDisplay from "../components/features/MetricsDisplay/MetricsDisplay.vue";
import Overview from "../components/features/Overview/Overview.vue";

export default defineComponent({
  name: "Home",
  components: {
    CampaignSelector,
    MetricsDisplay,
    Overview,
  },
  data() {
    return {
      campaigns: campaignsData.campaigns,
      selectedVacancy: null,
      selectedMetrics: [],
    };
  },
  methods: {
    updateSelectedVacancy(vacancy: string) {
      this.selectedVacancy = vacancy;
      const selectedCampaign = this.campaigns.find(
        (campaign) => campaign.vacancy === vacancy
      );
      this.selectedMetrics = selectedCampaign ? selectedCampaign.platforms : [];
    },
  },
});
</script>

<template>
  <div class="home-container">
    <header>
      <h1 class="font-bold text-lg">Campaign Performance Dashboard</h1>
    </header>
    <main>
      <Overview :metrics="campaigns" />
      <CampaignSelector
        class="pt-4"
        :campaigns="campaigns"
        @update:selectedVacancy="updateSelectedVacancy"
      />
      <MetricsDisplay
        v-if="selectedMetrics.length"
        :metrics="selectedMetrics"
        :selectedVacancy="selectedVacancy"
      />
    </main>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 20px;
  width: 100%;
}

main {
  flex-grow: 1;
  background-color: #fff;
  padding: 20px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
