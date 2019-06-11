import { call, put, select } from "redux-saga/effects";

export function searchCustomers({ text, customers, searchField }) {
  return {
    type: "SEARCH_CUSTOMERS_START",
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

export function searchApi({ text, customers, searchField }) {
  return customers.filter(c => c[searchField] === text);
}
