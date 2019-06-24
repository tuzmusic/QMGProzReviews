// @flow
import customers from "../__mocks__/customers";
import reducer from "../src/redux/reducers/customerReducer";
import { createCustomer } from "../src/redux/action-creators/customerActionCreators";
import { createCustomerSaga } from "../src/redux/actions/customerActions";
import recordSaga from "../recordSaga";
import type {
  CustomerAction,
  CustomerState
} from "../src/redux/reducers/customerReducer";

describe("creating a customer", () => {
  const oldCustomer = customers[2];
  const customer = customers[1];
  const startAction: CustomerAction = {
    type: "NEW_CUSTOMER_START",
    customer
  };

  const initialState: CustomerState = {
    customers: { [oldCustomer.id]: oldCustomer },
    currentCustomer: null,
    searchResults: null
  };
  const stateWithCustomer: CustomerState = {
    ...initialState,
    customers: { [oldCustomer.id]: oldCustomer, [customer.id]: customer }
  };

  const successAction: CustomerAction = {
    type: "NEW_CUSTOMER_SUCCESS",
    customer
  };

  describe("action creator", () => {
    it("creates a new customer start action", () => {
      const action = createCustomer(customer);
      expect(action).toEqual(startAction);
    });
  });

  describe("reducer", () => {
    it("takes an add customer success action and returns the state with the new customer", () => {
      expect(reducer(initialState, successAction)).toEqual(stateWithCustomer);
    });
  });

  describe("createCustomerSaga", () => {
    it("creates a new customer with a saga", async () => {
      const dispatched = await recordSaga(createCustomerSaga, startAction);
      expect(dispatched).toContainEqual(successAction);
    });
  });
});
