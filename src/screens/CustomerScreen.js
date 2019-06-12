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
  state = { isReviewing: false };

  automate() {
    this.cancelReview();
  }
  componentDidMount = () => {
    this.automate();
  };

  createReview({ content, rating }) {
    console.warn(
      "Waiting to finish implementing add review UI until I pass review to action instead of customer"
    );
    return;
    const review = new Review({
      id: Math.floor(1000 + Math.random() * 9000),
      user: { firstName: "Sample", lastName: "User" },
      customerId: this.props.customer.id,
      content,
      rating
    });
  }

  cancelReview() {
    this.setState({ isReviewing: false });
  }

  render() {
    const { customer } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <CustomerInfo customer={customer} />
          {!this.state.isReviewing ? (
            <View style={{ width: "100%" }}>
              <ReviewsList customer={customer} />
              <ReviewButton
                onPress={() => this.setState({ isReviewing: true })}
              />
            </View>
          ) : (
            <NewReviewScreen
              onCancel={this.cancelReview.bind(this)}
              onSubmit={this.createReview.bind(this)}
            />
          )}
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

const ReviewButton = ({ onPress }) => {
  return (
    <Button
      title="Leave a Review"
      style={styles.button}
      containerStyle={styles.buttonContainer}
      onPress={onPress}
    />
  );
};

export const ReviewsList = ({ customer }) => {
  const { reviews, averageRating } = customer;
  return (
    <View style={{ width: "100%" }}>
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
  scrollView: {
    margin: 20,
    marginBottom: 100,
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
