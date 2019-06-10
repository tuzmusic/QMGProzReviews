import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Customer from "../models/Customer";

class CustomerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1>{customer.fullName}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

const customer = new Customer({
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
      datePosted: new Date("6-1-2013")
    },
    {
      user: {
        firstName: "Jonathan"
      },
      content: "John Smith is great!",
      datePosted: new Date("6-1-2019")
    }
  ]
});

export default CustomerScreen;
