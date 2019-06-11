import React, { Component } from "react";
import { View, Text, AppRegistry } from "react-native";
import CustomerScreen from "../screens/CustomerScreen";
import SearchCustomerScreen from "../screens/SearchCustomerScreen";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

class SearchNavigator extends Component {
  render() {
    return <Text>Hello</Text>;
    // return <SearchStack navigation={this.props.navigation} />;
  }
}

const AppNavigator = createStackNavigator({
  Search: SearchNavigator
});

export default AppContainer = createAppContainer(AppNavigator);
