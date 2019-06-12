import React, { Component } from "react";
import CustomerScreen from "./CustomerScreen";

class CustomerScreenContainer extends Component {
  render() {
    const customer = this.props.navigation.getParam("customer");
    return <CustomerScreen customer={customer} />;
  }
}

export default CustomerScreenContainer;
