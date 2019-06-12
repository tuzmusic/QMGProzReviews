import React, { Component } from "react";
import { View, Text, AppRegistry } from "react-native";
import CustomerScreen from "../screens/CustomerScreen";
import CustomerScreenContainer from "../screens/CustomerScreenContainer";
import SearchCustomerScreen from "../screens/SearchCustomerScreen";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

const AppNavigator = createStackNavigator({
  Search: { screen: SearchCustomerScreen, title: "Search" },
  Customer: { screen: CustomerScreenContainer }
});

export default AppContainer = createAppContainer(AppNavigator);
