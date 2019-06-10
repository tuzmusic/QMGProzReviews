import React from "react";
import { View, Text, AppRegistry } from "react-native";
import CustomerScreen from "../screens/CustomerScreen";

export default function AppContainer() {
  return <CustomerScreen />;
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
