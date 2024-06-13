import { mount } from "@vue/test-utils";
import Dropdown from "@/components/atoms/Dropdown/Dropdown.vue";

describe("Dropdown.vue", () => {
  it("renders the label properly", () => {
    const wrapper = mount(Dropdown, {
      props: {
        label: "Select Option",
        options: [],
      },
    });

    expect(wrapper.find("label").text()).toBe("Select Option");
  });

  it("renders options correctly", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const wrapper = mount(Dropdown, {
      props: {
        label: "Select Option",
        options,
      },
    });

    const optionElements = wrapper.findAll("option");
    expect(optionElements.length).toBe(options.length + 1);

    options.forEach((option, index) => {
      expect(optionElements.at(index + 1)?.text()).toBe(option);
    });
  });

  it("emits the correct value when an option is selected", async () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const wrapper = mount(Dropdown, {
      props: {
        label: "Select Option",
        options,
      },
    });

    const selectElement = wrapper.find("select");
    await selectElement.setValue("Option 2");

    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
    expect(wrapper.emitted()["update:modelValue"][0]).toEqual(["Option 2"]);
  });
});
