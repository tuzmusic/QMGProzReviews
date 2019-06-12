import React, { Component } from "react";
import { View, Text, AppRegistry } from "react-native";
import CustomerScreen from "../screens/CustomerScreen";
import CustomerScreenContainer from "../containers-navigators/CustomerScreenContainer.js";
import CustomerSearchResultScreenContainer from "../containers-navigators/CustomerSearchResultScreenContainer.js";
import CustomerSearchResultScreen from "../screens/CustomerSearchResultScreen";
import SearchCustomerScreen from "../screens/SearchCustomerScreen";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

const AppNavigator = createStackNavigator({
  Search: { screen: SearchCustomerScreen, title: "Search" },
  Results: { screen: CustomerSearchResultScreenContainer },
  Customer: { screen: CustomerScreenContainer }
});

export default AppContainer = createAppContainer(AppNavigator);
