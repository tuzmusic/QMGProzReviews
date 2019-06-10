import Customer from "../../models/Customer";
import customers from "../../../__mocks__/customers";

const initialState = {
  customers: [customers],
  currentCustomer: customers[0]
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
