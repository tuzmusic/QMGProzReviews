import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/containers-navigators/AppContainer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import customerSaga from "./src/redux/actions/customerActions";
import authSaga from "./src/redux/actions/authActions";
import customerReducer from "./src/redux/reducers/customerReducer";
import authReducer from "./src/redux/reducers/authReducer";
import { setupAuthMockAdapter } from "./__mocks__/auth/axiosMocks";
import { all } from "redux-saga/effects";

const combinedReducer = combineReducers({
  customers: customerReducer,
  auth: authReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducer, {}, applyMiddleware(sagaMiddleware));
function* rootSaga() {
  yield all([customerSaga, authSaga]);
}
sagaMiddleware.run(authSaga);
sagaMiddleware.run(customerSaga);
setupAuthMockAdapter();
export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
