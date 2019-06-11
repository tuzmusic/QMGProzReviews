// @flow

export default class User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(obj: UserObject) {
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
  }
  get fullName() {
    return [this.firstName, this.lastName].join(" ");
  }

  static fromApi(json: OpenObject) {
    // reviews (and users) are probably represented in the api as links.
    // convert them here to objects? or not?
    return new User(json);
  }
}

type OpenObject = { [key: string]: any };
type UserObject = {
  id: number,
  firstName: string,
  lastName: string
};
