import reducer from "../src/redux/reducers/customerReducer";
import customers from "../__mocks__/customers";
import Review from "../src/models/Review";
import Customer from "../src/models/Customer";
import SagaTester from "redux-saga-tester";
import customerSaga, {
  addReviewSaga
} from "../src/redux/actions/customerActions";
import recordSaga from "../recordSaga";

const review = new Review({ content: "A mock review" });
const customer = customers[1];
const initialState = { customers: { [customer.id]: customer } };

const customerWithReview = new Customer({
  ...customer,
  reviews: [...customer.reviews, review]
});
const stateWithReview = {
  customers: { [customerWithReview.id]: customerWithReview }
};
const startAction = {
  type: "CUSTOMER_ADD_REVIEW_START",
  customer: customerWithReview
};
const successAction = {
  type: "CUSTOMER_ADD_REVIEW_SUCCESS",
  customer: customerWithReview
};

describe("creating a review", () => {
  describe("reducer", () => {
    it("takes a submit review succcess action and returns the state with the updated customer", () => {
      expect(reducer(initialState, successAction)).toEqual(stateWithReview);
    });
  });
});

describe("addReviewSaga", () => {
  it("adds a review to a customer with a saga", async () => {
    const dispatched = await recordSaga(addReviewSaga, startAction);
    expect(dispatched).toContainEqual(successAction);
  });
});

describe("integration", () => {
  let sagaStore;
  beforeEach(() => {
    sagaStore = new SagaTester({});
    sagaStore.start(customerSaga);
    jest.setTimeout(1000);
  });
  it("should perform a search and deliver the results", async () => {
    sagaStore.dispatch(startAction);
    await sagaStore.waitFor(successAction.type);
    expect(sagaStore.getCalledActions()).toEqual([startAction, successAction]);
  });
});
