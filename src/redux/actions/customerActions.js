// @flow
import type {
  CustomerState,
  CustomerAction,
  CustomerSearchParams
} from "../reducers/customerReducer";
import { call, put, select, takeEvery, all } from "redux-saga/effects";
import Customer from "../../models/Customer";
import type CustomerType from "../../models/Customer";
import Review from "../../models/Review";
import type ReviewType from "../../models/Review";

import type { Saga } from "redux-saga";

type SearchArgs = {
  searchParams: CustomerSearchParams
};
type AddReviewArgs = { review: ReviewType };

export function* searchSaga({ searchParams }: SearchArgs): Saga<void> {
  try {
    const results = searchApi(searchParams);
    yield put({
      type: "CUSTOMER_SEARCH_SUCCESS",
      results
    });
  } catch (error) {
    yield put({
      type: "CUSTOMER_SEARCH_FAILURE",
      error
    });
  }
}

export function* addReviewSaga({ review }: AddReviewArgs): Saga<void> {
  try {
    const newReview = addReviewApi(review);
    yield put({
      type: "CUSTOMER_ADD_REVIEW_SUCCESS",
      review: newReview
    });
  } catch (error) {
    yield put({
      type: "CUSTOMER_ADD_REVIEW_FAILURE",
      error
    });
  }
}

export function addReviewApi(review: Review) {
  // Update the customer (with the new review) using online API
  // Or possibly create the review using online API

  const result = review;
  // The API should return the customer (or the review, which would be dealt with differently)
  // Convert API result to Customer object
  return Review.fromApi(result);
}

// import type { OpenObject } from "../../models/Customer";
type OpenObject = { [key: string]: mixed };
export function searchApi({
  text,
  customers,
  searchField
}: CustomerSearchParams): OpenObject[] {
  // Perform search using online API
  const results = Object.values(customers).filter(
    (c: Object) => c[searchField] === text
  );
  // Convert API results to Customer objects
  return results.map(c => Customer.fromApi(c));
}

export default function* customerSaga(): Saga<void> {
  yield all([
    yield takeEvery("CUSTOMER_SEARCH_START", searchSaga),
    yield takeEvery("CUSTOMER_ADD_REVIEW_START", addReviewSaga)
  ]);
}
