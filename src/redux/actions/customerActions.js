import { call, put, select, takeEvery, all } from "redux-saga/effects";
import Customer from "../../models/Customer";
import Review from "../../models/Review";

export function searchCustomers({ text, customers, searchField }) {
  return {
    type: "CUSTOMER_SEARCH_START",
    searchParams: { text, customers, searchField }
  };
}

export function addNewReview(review) {
  return {
    type: "CUSTOMER_ADD_REVIEW_START",
    review
  };
}

export function* searchSaga({ searchParams }) {
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

export function* addReviewSaga({ review }) {
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

export function addReviewApi(review) {
  // Update the customer (with the new review) using online API
  // Or possibly create the review using online API

  const result = review;
  // The API should return the customer (or the review, which would be dealt with differently)
  // Convert API result to Customer object
  return Review.fromApi(result);
}

export function searchApi({ text, customers, searchField }) {
  // Perform search using online API
  const results = Object.values(customers).filter(c => c[searchField] === text);
  // Convert API results to Customer objects
  return results.map(c => Customer.fromApi(c));
}

export default function* customerSaga() {
  yield all([
    yield takeEvery("CUSTOMER_SEARCH_START", searchSaga),
    yield takeEvery("CUSTOMER_ADD_REVIEW_START", addReviewSaga)
  ]);
}
