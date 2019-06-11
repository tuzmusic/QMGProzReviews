// @flow

import type Customer from "../../models/Customer";
import customers from "../../../__mocks__/customers";

const initialState = {
  customers,
  currentCustomer: customers[0],
  searchResults: null
};

export default function customerReducer(
  state: CustomerState = initialState,
  action: CustomerAction
) {
  switch (action.type) {
    case "CUSTOMER_SEARCH_SUCCESS":
      return { ...state, searchResults: action.results };
    default:
      return state;
  }
}

type CustomerAction =
  | {
      type: "CUSTOMER_SEARCH_SUCCESS",
      results: Customer[]
    }
  | {
      type: "CUSTOMER_SEARCH_START",
      searchParams: {
        text: string,
        searchField: string,
        customers?: Customer[]
      }
    };

type CustomerState = {
  customers: Customer[],
  currentCustomer: Customer,
  searchResults: Customer[]
};
