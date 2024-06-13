import { mount } from "@vue/test-utils";
import Card from "./Card.vue";

describe("Card", () => {
  it("renders the title properly", () => {
    const wrapper = mount(Card, { props: { title: "Test Title" } });

    expect(wrapper.text()).toContain("Test Title");
  });

  it("renders slot content properly", () => {
    const slotContent = "<p>Test Slot Content</p>";
    const wrapper = mount(Card, {
      props: { title: "Test Title" },
      slots: {
        default: slotContent,
      },
    });

    expect(wrapper.html()).toContain("Test Slot Content");
  });
});
