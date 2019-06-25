import React, { Component } from "react";
import CustomerScreen from "../screens/CustomerScreen";
import CustomerScreenContainer from "../containers-navigators/CustomerScreenContainer.js";
import CustomerSearchResultScreenContainer from "../containers-navigators/CustomerSearchResultScreenContainer.js";
import CustomerSearchResultScreen from "../screens/CustomerSearchResultScreen";
import SearchCustomerScreen from "../screens/SearchCustomerScreen";
import NewCustomerScreen from "../screens/NewCustomerScreen";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import AuthStack from "../containers-navigators/AuthNavigator";
import DrawerContentView from "../screens/DrawerContentView";

const MainStack = createStackNavigator({
  // NewCustomer: NewCustomerScreen,
  Search: SearchCustomerScreen,
  Results: CustomerSearchResultScreenContainer,
  Customer: CustomerScreenContainer
});

const DrawerNavigator = createDrawerNavigator(
  {
    Main: MainStack
  },
  { contentComponent: DrawerContentView }
);

const SwitchNavigator = createSwitchNavigator({
  Auth: AuthStack,
  Main: DrawerNavigator
  // Main: MainStack
});

const AppNavigator = SwitchNavigator;
// const AppNavigator = MainStack;

export default AppContainer = createAppContainer(AppNavigator);
