// @flow
import type Review from "./Review";
import Sugar from "sugar";

export default class Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  reviews: Review[];

  constructor(obj: CustomerObject) {
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.address = obj.address;
    this.reviews = obj.reviews;
    this.phone = obj.phone;
    this.email = obj.email;
  }
  get fullName() {
    return [this.firstName, this.lastName].join(" ");
  }
  get averageRating() {
    const ratings = this.reviews.map(r => r.rating);
    return Sugar.Array.average(ratings);
  }

  static fromApi(json: OpenObject) {
    // reviews (and users) are probably represented in the api as links.
    // convert them here to objects? or not?
    return new Customer(json);
  }
}

type OpenObject = { [key: string]: any };
type CustomerObject = {
  id: number,
  firstName: string,
  lastName: string,
  address: string,
  phone: string,
  email: string,
  reviews: Review[]
};
