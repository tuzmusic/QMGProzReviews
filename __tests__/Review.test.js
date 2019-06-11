import Review from "../src/models/Review";

describe("Review", () => {
  const rev = new Review({ date: Date.now() - 1 });

  it("has a timePast property", () => {
    expect(rev.timePast).toEqual("1 day ago");
  });
});
