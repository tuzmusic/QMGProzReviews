// @flow

import Customer from "../../models/Customer";
import type CustomerType from "../../models/Customer";
import type Review from "../../models/Review";
import customers from "../../../__mocks__/customers";

const initialState = {
  customers: customers || {},
  currentCustomer: customers[0],
  searchResults: null
};

export default function customerReducer(
  state: CustomerState = initialState,
  action: CustomerAction
) {
  // if (action.type[0] !== "@") console.log(action);

  switch (action.type) {
    case "CUSTOMER_SEARCH_SUCCESS":
      return { ...state, searchResults: action.results };
    case "CUSTOMER_ADD_REVIEW_SUCCESS":
      const review = action.review;
      const custId = review.customerId;
      const oldCustomer = state.customers[custId];
      const newReviews = [...oldCustomer.reviews, review];
      const newCustomer = new Customer({ ...oldCustomer, reviews: newReviews });
      return {
        ...state,
        customers: { ...state.customers, [custId]: newCustomer }
      };
    default:
      return state;
  }
}

export type CustomerAction = CustomerSearchAction | CustomerReviewAction;

type CustomerSearchAction =
  | {
      type: "CUSTOMER_SEARCH_SUCCESS",
      results: CustomerType[]
    }
  | {
      type: "CUSTOMER_SEARCH_START",
      searchParams: {
        text: string,
        searchField: string,
        customers?: { [key: number]: CustomerType }
      }
    };

type CustomerReviewAction =
  | {
      type: "CUSTOMER_ADD_REVIEW_START",
      review: Review
    }
  | {
      type: "CUSTOMER_ADD_REVIEW_SUCCESS",
      review: Review
    };

type CustomerState = {
  +customers: { [key: number]: CustomerType },
  +currentCustomer: CustomerType,
  +searchResults: ?(CustomerType[])
};
