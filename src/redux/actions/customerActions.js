import { call, put, select, takeEvery, all } from "redux-saga/effects";

export function searchCustomers({ text, customers, searchField }) {
  return {
    type: "CUSTOMER_SEARCH_START",
    searchParams: { text, customers, searchField }
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
    // const results = searchApi(searchParams);
    yield put({
      type: "CUSTOMER_ADD_REVIEW_SUCCESS",
      customer
    });
  } catch (error) {
    yield put({
      type: "CUSTOMER_ADD_REVIEW_FAILURE",
      error
    });
  }
}

export function searchApi({ text, customers, searchField }) {
  return Object.values(customers).filter(c => c[searchField] === text);
}

export default function* customerSaga() {
  yield all([
    yield takeEvery("CUSTOMER_SEARCH_START", searchSaga),
    yield takeEvery("CUSTOMER_ADD_REVIEW_START", addReviewSaga)
  ]);
}
