import { mount } from "@vue/test-utils";
import Table from "@/components/atoms/Table/Table.vue";

describe("Table.vue", () => {
  it("renders the headers properly", () => {
    const headers = ["Name", "Age", "City"];
    const rows = [];
    const wrapper = mount(Table, {
      props: { headers, rows },
    });

    const headerElements = wrapper.findAll("thead th");
    expect(headerElements.length).toBe(headers.length);

    headers.forEach((header, index) => {
      expect(headerElements.at(index)?.text()).toBe(header);
    });
  });

  it("renders the rows properly", () => {
    const headers = ["Name", "Age", "City"];
    const rows = [
      { Name: "Alice", Age: 30, City: "New York" },
      { Name: "Bob", Age: 25, City: "San Francisco" },
    ];
    const wrapper = mount(Table, {
      props: { headers, rows },
    });

    const rowElements = wrapper.findAll("tbody tr");
    expect(rowElements.length).toBe(rows.length);

    rows.forEach((row, rowIndex) => {
      const cellElements = rowElements.at(rowIndex)?.findAll("td");
      headers.forEach((header, cellIndex) => {
        expect(cellElements?.at(cellIndex)?.text()).toBe(String(row[header]));
      });
    });
  });

  it("renders the table structure correctly", () => {
    const headers = ["Name", "Age", "City"];
    const rows = [
      { Name: "Alice", Age: 30, City: "New York" },
      { Name: "Bob", Age: 25, City: "San Francisco" },
    ];
    const wrapper = mount(Table, {
      props: { headers, rows },
    });

    expect(wrapper.find("table").exists()).toBe(true);
    expect(wrapper.find("thead").exists()).toBe(true);
    expect(wrapper.find("tbody").exists()).toBe(true);
  });
});
