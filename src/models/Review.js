// @flow
import Sugar from "sugar";
import type User from "./User";

export default class Review {
  id: number;
  user: User | { firstName: string, lastName: string };
  customerId: number;
  content: string;
  rating: number;
  date: Sugar.Date;

  constructor(obj: ReviewObject) {
    this.id = obj.id;
    this.user = obj.user;
    this.customerId = obj.customerId;
    this.content = obj.content;
    this.rating = obj.rating;
    this.date = obj.date ? new Sugar.Date(obj.date) : new Sugar.Date();
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

export type ReviewObject = {
  id: number,
  user: User | { firstName: string, lastName: string },
  customerId: number,
  content: string,
  rating: number,
  date?: string
};
