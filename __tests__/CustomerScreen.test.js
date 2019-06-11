import { render } from "react-native-testing-library";
import { ReviewsList } from "../src/screens/CustomerScreen";
// import { ReviewView } from "../src/subviews/ReviewView";
import customers from "../__mocks__/customers";

describe("ReviewsList", () => {
  it("renders a list of reviews", () => {
    const { getAllByType, getByText } = render(
      <ReviewsList reviews={customers[0].reviews} />
    );
    const allReviews = getAllByType(ReviewView);
    expect(allReviews.length).toBe(2);
  });
});
