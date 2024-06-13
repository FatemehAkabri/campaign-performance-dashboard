import { mount } from "@vue/test-utils";
import MetricCard from "@/components/features/MetricCard/MetricCard.vue";
import Card from "@/components/atoms/Card/Card.vue";
import { Bar } from "vue-chartjs";

jest.mock("vue-chartjs", () => ({
  Bar: {
    render: () => {},
    props: ["data", "options"],
  },
}));

describe("MetricCard.vue", () => {
  it("renders the Card component with the correct title", () => {
    const wrapper = mount(MetricCard, {
      props: {
        title: "Test Metric",
        data: [],
        platforms: [],
        colors: [],
      },
    });

    const card = wrapper.findComponent(Card);
    expect(card.exists()).toBe(true);
    expect(card.props("title")).toBe("Test Metric");
  });

  it("renders the Bar chart with the correct data and options", () => {
    const data = [10, 20, 30];
    const platforms = ["Platform 1", "Platform 2", "Platform 3"];
    const colors = ["#ff0000", "#00ff00", "#0000ff"];
    const wrapper = mount(MetricCard, {
      props: {
        title: "Test Metric",
        data,
        platforms,
        colors,
      },
    });

    const barChart = wrapper.findComponent(Bar);
    expect(barChart.exists()).toBe(true);
    expect(barChart.props("data")).toEqual({
      labels: platforms,
      datasets: [
        {
          label: "Test Metric",
          backgroundColor: colors,
          data,
        },
      ],
    });

    expect(barChart.props("options")).toEqual({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    });
  });
});
