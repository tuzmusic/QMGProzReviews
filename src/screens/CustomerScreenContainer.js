import React, { Component } from "react";
import CustomerScreen from "./CustomerScreen";

import customers from "../../__mocks__/customers";

class CustomerScreenContainer extends Component {
  render() {
    return <CustomerScreen customer={customers[1]} />;
  }
}

export default CustomerScreenContainer;
