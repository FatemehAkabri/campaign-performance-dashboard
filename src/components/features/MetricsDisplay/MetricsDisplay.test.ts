import { mount } from "@vue/test-utils";
import MetricsDisplay from "@/components/features/MetricsDisplay/MetricsDisplay.vue";

jest.mock("vue-chartjs", () => ({
  Bar: {
    render: () => {},
    props: ["data", "options"],
  },
}));

describe("MetricsDisplay.vue", () => {
  const metrics = [
    {
      name: "Platform 1",
      metrics: {
        impressions: 1000,
        clicks: 100,
        applications: 10,
        costPerImpression: 0.1,
        costPerClick: 1,
        costPerApplication: 10,
      },
    },
    {
      name: "Platform 2",
      metrics: {
        impressions: 2000,
        clicks: 200,
        applications: 20,
        costPerImpression: 0.2,
        costPerClick: 2,
        costPerApplication: 20,
      },
    },
  ];

  it("renders the correct vacancy title", () => {
    const wrapper = mount(MetricsDisplay, {
      props: {
        metrics,
        selectedVacancy: "Software Developer",
      },
    });

    expect(wrapper.find("h2").text()).toBe(
      "Metrics for Software Developer Position"
    );
  });

  it("renders the Table component with the correct headers and rows", () => {
    const wrapper = mount(MetricsDisplay, {
      props: {
        metrics,
        selectedVacancy: "Software Developer",
      },
    });

    const tableHeaders = wrapper.findAll("th");
    expect(tableHeaders.length).toBe(7);
    expect(tableHeaders[0].text()).toBe("Platform");
    expect(tableHeaders[1].text()).toBe("Impressions");
    expect(tableHeaders[2].text()).toBe("Clicks");
    expect(tableHeaders[3].text()).toBe("Applications");
    expect(tableHeaders[4].text()).toBe("Cost Per Impression");
    expect(tableHeaders[5].text()).toBe("Cost Per Click");
    expect(tableHeaders[6].text()).toBe("Cost Per Application");

    const tableRows = wrapper.findAll("tbody tr");
    expect(tableRows.length).toBe(2);
    expect(tableRows[0].find("td").text()).toBe("Platform 1");
    expect(tableRows[1].find("td").text()).toBe("Platform 2");
  });

  it("renders MetricCard components with the correct props", () => {
    const wrapper = mount(MetricsDisplay, {
      props: {
        metrics,
        selectedVacancy: "Software Developer",
      },
    });

    const metricCards = wrapper.findAllComponents({ name: "MetricCard" });
    expect(metricCards.length).toBe(6);

    const titles = [
      "Impressions",
      "Clicks",
      "Applications",
      "Cost Per Impression",
      "Cost Per Click",
      "Cost Per Application",
    ];

    metricCards.forEach((card, index) => {
      expect(card.props("title")).toBe(titles[index]);
    });
  });
});
