import { searchCustomers } from "../src/redux/actions/customerActions";
import customers from "../__mocks__/customers";

describe("searchCustomers", () => {
  it("searches customers by address", () => {
    const text = "55-57 59th St";
    const searchField = "address";
    const result = searchCustomers({ text, customers, searchField });
    expect(result.length).toBe(1);
    expect(result).toContain(customers[0]);
  });
});
