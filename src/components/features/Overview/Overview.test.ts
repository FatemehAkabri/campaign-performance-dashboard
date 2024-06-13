import { mount } from "@vue/test-utils";
import Overview from "@/components/features/Overview/Overview.vue";
import Card from "@/components/atoms/Card/Card.vue";

jest.mock("vue-chartjs", () => ({
  Bar: {
    render: () => {},
    props: ["data", "options"],
  },
}));
describe("Overview.vue", () => {
  const metrics = [
    {
      platforms: [
        {
          metrics: {
            impressions: 1000,
            clicks: 100,
            applications: 10,
            costPerImpression: 0.05,
            costPerClick: 1,
            costPerApplication: 10,
          },
        },
        {
          metrics: {
            impressions: 2000,
            clicks: 200,
            applications: 20,
            costPerImpression: 0.04,
            costPerClick: 0.9,
            costPerApplication: 9,
          },
        },
      ],
    },
    {
      platforms: [
        {
          metrics: {
            impressions: 3000,
            clicks: 300,
            applications: 30,
            costPerImpression: 0.03,
            costPerClick: 0.8,
            costPerApplication: 8,
          },
        },
        {
          metrics: {
            impressions: 4000,
            clicks: 400,
            applications: 40,
            costPerImpression: 0.02,
            costPerClick: 0.7,
            costPerApplication: 7,
          },
        },
      ],
    },
  ];

  it("calculates total impressions correctly", () => {
    const wrapper = mount(Overview, {
      props: { metrics },
    });
    expect(wrapper.vm.totalImpressions).toBe(10000);
  });

  it("calculates total clicks correctly", () => {
    const wrapper = mount(Overview, {
      props: { metrics },
    });
    expect(wrapper.vm.totalClicks).toBe(1000);
  });

  it("calculates total applications correctly", () => {
    const wrapper = mount(Overview, {
      props: { metrics },
    });
    expect(wrapper.vm.totalApplications).toBe(100);
  });

  it("calculates average cost per impression correctly", () => {
    const wrapper = mount(Overview, {
      props: { metrics },
    });
    expect(wrapper.vm.averageCostPerImpression).toBeCloseTo(0.033);
  });

  it("calculates average cost per click correctly", () => {
    const wrapper = mount(Overview, {
      props: { metrics },
    });
    expect(wrapper.vm.averageCostPerClick).toBeCloseTo(0.8);
  });

  it("calculates average cost per application correctly", () => {
    const wrapper = mount(Overview, {
      props: { metrics },
    });
    expect(wrapper.vm.averageCostPerApplication).toBeCloseTo(8);
  });

  it("renders the correct number of Card components", () => {
    const wrapper = mount(Overview, {
      props: { metrics },
    });
    const cards = wrapper.findAllComponents(Card);
    expect(cards.length).toBe(6);
  });

  it("renders the correct values in the Card components", () => {
    const wrapper = mount(Overview, {
      props: { metrics },
    });

    const cardTitles = [
      "Total Impressions",
      "Total Clicks",
      "Total Applications",
      "Average Cost Per Impression",
      "Average Cost Per Click",
      "Average Cost Per Application",
    ];

    const cardValues = ["10000", "1000", "100", "0.03", "0.80", "8.00"];

    const cards = wrapper.findAllComponents(Card);
    cards.forEach((card, index) => {
      expect(card.props("title")).toBe(cardTitles[index]);
      expect(card.find("p").text()).toBe(cardValues[index]);
    });
  });
});
