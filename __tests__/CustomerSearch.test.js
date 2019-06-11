import Customer from "../src/models/Customer";
import {
  searchCustomers,
  searchSaga,
  searchApi
} from "../src/redux/actions/customerActions";
import customers from "../__mocks__/customers";
import { runSaga } from "redux-saga";

export async function recordSaga(saga, initialAction) {
  const dispatched = [];

  await runSaga(
    { dispatch: action => dispatched.push(action) },
    saga,
    initialAction
  ).done;

  return dispatched;
}

beforeEach(() => jest.resetAllMocks());

const text = "55-57 59th St";
const searchField = "address";
const searchParams = { text, searchField, customers };

describe("searchCustomers", () => {
  it("kicks off a redux action to start the search", () => {
    const expectedAction = { type: "SEARCH_CUSTOMERS_START", searchParams };
    expect(searchCustomers(searchParams)).toEqual(expectedAction);
  });
});

describe("searchSaga", () => {
  const initialAction = { type: "SEARCH_CUSTOMERS_START", searchParams };
  it("searches customers with a saga", async () => {
    const dispatched = await recordSaga(searchSaga, initialAction);
    const expectedAction = {
      type: "CUSTOMER_SEARCH_SUCCESS",
      results: [customers[0]]
    };
    expect(dispatched).toContainEqual(expectedAction);
  });

  it("returns an error on a failure", async () => {
    const error = new Error("uh oh!");
    const spy = jest
      .spyOn(Array.prototype, "filter")
      .mockImplementation(() => throw error);
    const expectedAction = { type: "CUSTOMER_SEARCH_FAILURE", error };
    try {
      const dispatched = await recordSaga(searchSaga, initialAction);
      console.log("***DISPATCHED FROM TRY IN TEST***", dispatched[0].type);
      expect(dispatched).toContainEqual(expectedAction);
    } catch (e) {
      console.log("***ERROR FROM CATCH IN TEST***", e.message);
    }
    spy.mockRestore();
  });
});

describe("searchApi", () => {
  it("performs the search on the database", () => {
    const apiResult = searchApi(searchParams);
    const customersFromResult = apiResult.map(c => new Customer.fromApi(c));
    expect(customersFromResult).toContainEqual(customers[0]);
  });
});
