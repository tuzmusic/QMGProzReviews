// @flow
import Sugar from "sugar";
/* 
type UserObject = {
  id: number,
  firstName: string,
  lastName: string,
  dateCreated?: string | { raw: string },
  username: string,
  email: string
};
 */
export default class User {
  id: number;
  firstName: string;
  lastName: string;
  dateCreated: Sugar.Date;
  username: string;
  email: string;

  constructor(obj: Object) {
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.email = obj.email;
    this.username = obj.username;
    this.dateCreated = !obj.dateCreated
      ? new Sugar.Date()
      : obj.dateCreated.raw // should only happen if obj has already been created as a Review (I think?)
      ? new Sugar.Date(obj.dateCreated.raw)
      : new Sugar.Date(obj.dateCreated);
  }

  get fullName(): string {
    return [this.firstName, this.lastName].join(" ");
  }

  static fromApi(json: Object) {
    const userObject = {
      ...json,
      dateCreated: json.registered,
      firstName: json.firstname,
      lastName: json.lastname
    };
    // reviews (and users) are probably represented in the api as links.
    // convert them here to objects? or not?
    return new User(userObject);
  }
}

// type OpenObject = { [key: string]: any };
