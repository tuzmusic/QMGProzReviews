import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, ScrollView, View } from "react-native";
import { ThemeProvider, Text, Divider, Rating } from "react-native-elements";
import Customer from "../models/Customer";
import ReviewForm from "../subviews/ReviewForm";
import Review from "../subviews/ReviewView";

export class CustomerScreen extends Component {
  render() {
    const { customer } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.container}>
          <CustomerInfo customer={customer} />
          <Divider style={styles.divider} />
          <Text h2>Reviews</Text>
          <ReviewsList reviews={customer.reviews} />
          <ReviewForm />
        </ScrollView>
      </ThemeProvider>
    );
  }
}

function mapStateToProps({ customers }) {
  return {
    customer: customers.currentCustomer
  };
}

export default connect(mapStateToProps)(CustomerScreen);

const CustomerInfo = ({ customer }) => {
  return (
    <View>
      <Text h1>{customer.fullName}</Text>
      <Text style={styles.detailText}>{customer.address}</Text>
      <Text style={styles.detailText}>{customer.phone}</Text>
      <Text style={styles.detailText}>{customer.email}</Text>
      <Text style={styles.detailText}> </Text>
      <Text style={styles.detailText}>
        Rating ({customer.reviews.length} reviews):{" "}
      </Text>
      <Rating
        readonly
        startingValue={customer.averageRating}
        style={styles.rating}
        imageSize={20}
      />
    </View>
  );
};

export const ReviewsList = ({ reviews }) => {
  return reviews.map((review, i) => <Review review={review} key={i} />);
};

const styles = {
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  divider: {
    backgroundColor: "black",
    height: 50
  },
  detailText: { paddingTop: 5 },
  rating: { padding: 5, alignItems: "flex-start" }
};

const theme = {
  Text: {
    style: { fontSize: 18 }
  }
};
