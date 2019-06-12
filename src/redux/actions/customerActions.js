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

export function searchApi({ text, customers, searchField }) {
  return Object.values(customers).filter(c => c[searchField] === text);
}

function* watchSearch() {
  yield takeEvery("CUSTOMER_SEARCH_START", searchSaga);
}

export default function* customerSaga() {
  yield all([watchSearch()]);
}
