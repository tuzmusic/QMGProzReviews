// @flow

import Customer from "../../models/Customer";
import customers from "../../../__mocks__/customers";

const initialState = {
  customers,
  currentCustomer: customers[0],
  searchResults: []
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "CUSTOMER_SEARCH_SUCCESS":
      return { ...state, searchResults: action.results };
    default:
      return state;
  }
}
