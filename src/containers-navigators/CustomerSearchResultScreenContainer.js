import React, { Component } from "react";
import CustomerSearchResultScreen from "../screens/CustomerSearchResultScreen";

class CustomerSearchResultScreenContainer extends Component {
  render() {
    const results = this.props.navigation.getParam("results");
    return <CustomerSearchResultScreen results={results} />;
  }
}

export default CustomerSearchResultScreenContainer;
