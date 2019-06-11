// @flow
import Sugar from "sugar";
import type User from "./User";

export default class Review {
  id: number;
  user: User;
  customer: string;
  content: string;
  rating: number;
  date: Sugar.Date;

  constructor(obj: ReviewObject) {
    this.id = obj.id;
    this.user = obj.user;
    this.customer = obj.customer;
    this.content = obj.content;
    this.rating = obj.rating;
    this.date = new Sugar.Date(obj.date);
  }

  get timePast() {
    return this.date.relative().raw;
  }

  static fromApi(json: OpenObject) {
    // customers (and users) are probably represented in the api as links.
    // convert them here to objects? or not?
    return new Review(json);
  }
}
type OpenObject = { [key: string]: any };

type ReviewObject = {
  id: number,
  user: User,
  customer: string,
  content: string,
  rating: number,
  date: string
};
