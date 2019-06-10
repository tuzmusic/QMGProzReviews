import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/containers-navigators/AppContainer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import customerReducer from "./src/redux/reducers/customerReducer";

const combinedReducer = combineReducers({ customers: customerReducer });
const store = createStore(combinedReducer);
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
