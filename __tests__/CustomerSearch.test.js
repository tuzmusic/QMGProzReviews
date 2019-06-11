import { searchCustomers } from "../src/redux/actions/customerActions";
import customers from "../__mocks__/customers";

describe("searchCustomers", () => {
  it("searches customers by address", () => {
    const text = "55-57 59th St";
    const searchField = "address";
    expect(searchCustomers({ text, customers, searchField })).toContain(
      customers[0]
    );
  });
});
