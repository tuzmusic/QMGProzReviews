import Customer from "../src/models/Customer";

const customers = [
  {
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
        datePosted: new Date("6-1-2013"),
        rating: 5
      },
      {
        user: {
          firstName: "Jonathan"
        },
        content: "John Smith is great!",
        datePosted: new Date("6-1-2019"),
        rating: 5
      }
    ]
  }
];

export default customers.map(c => {
  return new Customer(c);
});
