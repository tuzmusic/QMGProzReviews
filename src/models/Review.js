// @flow
import Sugar from "sugar";

export default class Review {
  constructor({ id, user, customer, content, rating, date, ...rest }) {
    this.id = id;
    this.user = user;
    this.customer = customer;
    this.content = content;
    this.rating = rating;
    this.date = new Sugar.Date(date);
    console.log(date);

    console.log(this.date);
  }

  get timePast() {
    return this.date.relative().raw;
  }

  static fromApi(json) {
    // customers (and users) are probably represented in the api as links.
    // convert them here to objects? or not?
    return new Review(json);
  }
}
