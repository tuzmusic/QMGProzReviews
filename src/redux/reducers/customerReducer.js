// @flow

import type Customer from "../../models/Customer";
import type Review from "../../models/Review";
import customers from "../../../__mocks__/customers";

const initialState = {
  customers: customers || [],
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
    case "CUSTOMER_ADD_REVIEW_SUCCESS":
      return { ...state };
    default:
      return state;
  }
}

type CustomerAction = CustomerSearchAction | CustomerReviewAction;
type CustomerSearchAction =
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

type CustomerReviewAction = {
  type: "CUSTOMER_ADD_REVIEW_SUCCESS",
  customer: Customer
};

type CustomerState = {
  customers: Customer[],
  currentCustomer: Customer,
  searchResults: ?(Customer[])
};
