import reducer from "../src/redux/reducers/customerReducer";
import customers from "../__mocks__/customers";
import Review from "../src/models/Review";
import Customer from "../src/models/Customer";

const review = new Review({ content: "A mock review" });
const customer = customers[0];
const initialState = { customers: [customer] };
const customerWithReview = new Customer({
  ...customer,
  reviews: [...customer.reviews, review]
});
const stateWithReview = { customers: [customerWithReview] };

const successAction = {
  type: "CUSTOMER_ADD_REVIEW_SUCCESS",
  customerWithReview
};

xdescribe("creating a review", () => {
  describe("reducer", () => {
    it("takes a submit review succcess action and returns the state with the updated customer", () => {
      expect(reducer(initialState, successAction)).toEqual(stateWithReview);
    });
  });
});
