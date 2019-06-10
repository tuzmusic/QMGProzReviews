// @flow

export default class Customer {
  constructor({
    id,
    firstName,
    lastName,
    address,
    phone,
    email,
    reviews,
    ...rest
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.reviews = reviews;
    this.phone = phone;
    this.email = email;
  }
  get fullName() {
    return [this.firstName, this.lastName].join(" ");
  }

  static fromApi(json) {
    // reviews (and users) are probably represented in the api as links.
    // convert them here to objects? or not?
    return new Customer(json);
  }
}
