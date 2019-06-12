import Customer from "../src/models/Customer";
import Review from "../src/models/Review";

let customers = new Map();
customers.set(1, {
  id: 1,
  firstName: "John",
  lastName: "Smith",
  address: "55-57 59th St",
  phone: "545-985-8727",
  email: "listing@site-example.com",
  reviews: [
    {
      user: {
        firstName: "Cole",
        lastName: "Harris"
      },
      content: "John smith paid me on time and was a pleasure to work with",
      date: new Date("6-1-2013"),
      rating: 5
    },
    {
      user: {
        firstName: "Jonathan"
      },
      content: "John Smith is great!",
      date: new Date("6-1-2019"),
      rating: 5
    }
  ].map(r => new Review(r))
});
customers.set(2, {
  id: 2,
  firstName: "Albert",
  lastName: "Dore",
  address: "123 Main St",
  phone: "098-765-5432",
  email: "albert@site-example.com",
  reviews: [
    {
      user: {
        firstName: "Josh",
        lastName: "Purses"
      },
      content: "Albert is the worst!",
      date: new Date("6-1-2013"),
      rating: 1
    },
    {
      user: {
        firstName: "Jonathan"
      },
      content: "I hate this guy.",
      date: new Date("6-1-2019"),
      rating: 3
    }
  ].map(r => new Review(r))
});
customers.set(3, {
  id: 3,
  firstName: "Jane",
  lastName: "Smith",
  address: "55-57 59th St",
  phone: "545-985-8727",
  email: "listing@site-example.com",
  reviews: [
    {
      user: {
        firstName: "Cole",
        lastName: "Harris"
      },
      content: "John smith paid me on time and was a pleasure to work with",
      date: new Date("6-1-2013"),
      rating: 5
    },
    {
      user: {
        firstName: "Jonathan"
      },
      content: "John Smith is great!",
      date: new Date("6-1-2019"),
      rating: 5
    }
  ].map(r => new Review(r))
});

const customerObjects = new Map();
customers.forEach(c => {
  customerObjects.set(c.id, new Customer(c));
});

export default customerObjects;
