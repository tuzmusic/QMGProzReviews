import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, ScrollView, View } from "react-native";
import {
  ThemeProvider,
  Text,
  Divider,
  Rating,
  Button
} from "react-native-elements";
import Customer from "../models/Customer";
import Review from "../subviews/ReviewView";
import NewReviewScreen from "./NewReviewScreen";

export class CustomerScreen extends Component {
  render() {
    const { customer } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.container}>
          <CustomerInfo customer={customer} />
          <ReviewsList customer={customer} />
          <ReviewButton />
          <NewReviewScreen />
        </ScrollView>
      </ThemeProvider>
    );
  }
}

export default connect()(CustomerScreen);

const CustomerInfo = ({ customer }) => {
  return (
    <View>
      <Text h1>{customer.fullName}</Text>
      <Text style={styles.detailText}>{customer.address}</Text>
      <Text style={styles.detailText}>{customer.phone}</Text>
      <Text style={styles.detailText}>{customer.email}</Text>
    </View>
  );
};

const ReviewButton = props => {
  return (
    <Button
      title="Leave a Review"
      style={styles.button}
      containerStyle={styles.buttonContainer}
    />
  );
};

export const ReviewsList = ({ customer }) => {
  const { reviews, averageRating } = customer;
  return (
    <View>
      <Text style={styles.detailText}>Rating ({reviews.length} reviews): </Text>
      <Rating
        readonly
        startingValue={customer.averageRating}
        style={styles.rating}
        imageSize={20}
      />
      <Text style={styles.detailText}>{/* blank line */} </Text>
      <Text h2>Reviews</Text>
      {reviews.map((review, i) => (
        <Review review={review} key={i} />
      ))}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  buttonContainer: {
    alignItems: "center",
    paddingTop: 20,
    width: "100%"
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
