import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/containers-navigators/AppContainer";

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
