// @flow

export default class Review {
  constructor({ id, user, customer, content, ...rest }) {
    this.id = id;
    this.user = user;
    this.customer = customer;
    this.content = content;
  }

  static fromApi(json) {
    // customers (and users) are probably represented in the api as links.
    // convert them here to objects? or not?
    return new Review(json);
  }
}
