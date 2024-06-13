import { mount } from "@vue/test-utils";
import CampaignSelector from "@/components/features/CampaignSelector/CampaignSelector.vue";
import Dropdown from "@/components/atoms/Dropdown/Dropdown.vue";

describe("CampaignSelector.vue", () => {
  it("renders the Dropdown component properly", () => {
    const campaigns = [
      { vacancy: "Software Developer" },
      { vacancy: "UX Designer" },
    ];
    const wrapper = mount(CampaignSelector, {
      props: { campaigns },
    });

    const dropdown = wrapper.findComponent(Dropdown);
    expect(dropdown.exists()).toBe(true);
  });

  it("passes the correct props to Dropdown", () => {
    const campaigns = [
      { vacancy: "Software Developer" },
      { vacancy: "UX Designer" },
    ];
    const wrapper = mount(CampaignSelector, {
      props: { campaigns },
    });

    const dropdown = wrapper.findComponent(Dropdown);
    const options = campaigns.map((campaign) => campaign.vacancy);

    expect(dropdown.props("label")).toBe("Select Vacancy");
    expect(dropdown.props("options")).toEqual(options);
    expect(dropdown.props("modelValue")).toBe("");
  });

  it("updates selectedVacancy and emits update:selectedVacancy event when Dropdown value changes", async () => {
    const campaigns = [
      { vacancy: "Software Developer" },
      { vacancy: "UX Designer" },
    ];
    const wrapper = mount(CampaignSelector, {
      props: { campaigns },
    });

    const dropdown = wrapper.findComponent(Dropdown);
    await dropdown.vm.$emit("update:modelValue", "UX Designer");

    expect(wrapper.vm.selectedVacancy).toBe("UX Designer");
    expect(wrapper.emitted()["update:selectedVacancy"]).toBeTruthy();
    expect(wrapper.emitted()["update:selectedVacancy"][0]).toEqual([
      "UX Designer",
    ]);
  });
});
