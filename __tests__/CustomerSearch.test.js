import {
  searchCustomers,
  searchSaga
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

describe("searchCustomers", () => {
  const text = "55-57 59th St";
  const searchField = "address";
  const searchParams = { text, searchField, customers };

  xit("searches customers by address", () => {
    const result = searchCustomers({ text, customers, searchField });
    expect(result.length).toBe(1);
    expect(result).toContain(customers[0]);
  });

  it("kicks off a redux action to start the search", () => {
    const expectedAction = { type: "SEARCH_CUSTOMERS_START", searchParams };
    expect(searchCustomers(searchParams)).toEqual(expectedAction);
  });

  it("has a saga or whatever", async () => {
    const initialAction = { type: "SEARCH_CUSTOMERS_START", searchParams };
    const dispatched = await recordSaga(searchSaga, initialAction);
    const expectedAction = {
      type: "CUSTOMER_SEARCH_SUCCESS",
      results: [customers[0]]
    };
    expect(dispatched).toContainEqual(expectedAction);
  });

  xit("should fail if not authenticated", async () => {
    selectors.isAuthenticated.mockImplementation(() => false);

    const initialAction = { profileId: 1 };
    const dispatched = await recordSaga(loadProfileSaga, initialAction);

    expect(dispatched).toContainEqual(loadProfileFailure());
    expect(api.getProfile).not.toHaveBeenCalled();
  });
});
