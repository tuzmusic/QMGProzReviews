import { call, put, select, takeEvery, all } from "redux-saga/effects";
import Customer from "../../models/Customer";

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

export function* addReviewSaga({ customer }) {
  try {
    const customerWithReview = addReviewApi(customer);
    yield put({
      type: "CUSTOMER_ADD_REVIEW_SUCCESS",
      customer: customerWithReview
    });
  } catch (error) {
    yield put({
      type: "CUSTOMER_ADD_REVIEW_FAILURE",
      error
    });
  }
}

export function addReviewApi(customer) {
  // Update the customer (with the new review) using online API
  // Or possibly create the review using online API
  const result = customer;
  // The API should return the customer (or the review, which would be dealt with differently)
  // Convert API result to Customer object
  return Customer.fromApi(result);
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
