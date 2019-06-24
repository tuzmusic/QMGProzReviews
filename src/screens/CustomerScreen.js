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
import Review from "../models/Review";
import ReviewView from "../subviews/ReviewView";
import NewReviewScreen from "./NewReviewScreen";
import { addNewReview } from "../redux/actions/customerActions";

export class CustomerScreen extends Component {
  state = { isReviewing: false };

  async automate() {
    await setTimeout(this.startReview.bind(this), 10);
  }
  componentDidMount() {
    // this.automate();
  }

  createReview({ content, rating }) {
    const review = new Review({
      id: Math.floor(1000 + Math.random() * 9000),
      user: { firstName: "Sample", lastName: "User" },
      customerId: this.props.customer.id,
      content,
      rating
    });
    this.props.addNewReview(review);
    this.setState({ isReviewing: false });
  }

  startReview() {
    this.setState({ isReviewing: true });
  }

  cancelReview() {
    this.setState({ isReviewing: false });
  }

  render() {
    const customer = this.props.allCustomers[this.props.customer.id];
    return (
      <ThemeProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <CustomerInfo customer={customer} />
          {!this.state.isReviewing ? (
            <View style={{ width: "100%" }}>
              <ReviewsList
                customer={customer}
                onStartReviewPress={this.startReview.bind(this)}
              />
            </View>
          ) : (
            <NewReviewScreen
              onCancel={this.cancelReview.bind(this)}
              onSubmit={this.createReview.bind(this)}
            />
          )}
          <Divider style={{ height: 100 }} />
        </ScrollView>
      </ThemeProvider>
    );
  }
}

export default connect(
  ({ customers }) => ({ allCustomers: customers.customers }),
  { addNewReview }
)(CustomerScreen);

const CustomerInfo = ({ customer }) => {
  return (
    <View>
      <Text h1>{customer.fullName}</Text>
      <Text style={styles.detailText}>{customer.address}</Text>
      <Text style={styles.detailText}>{customer.phone}</Text>
      <Text style={styles.detailText}>{customer.email}</Text>
      <Text style={styles.detailText}>
        Rating ({customer.reviews.length} reviews):
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

export const ReviewsList = ({ customer, onStartReviewPress }) => {
  const { reviews, averageRating } = customer;
  return (
    <View style={{ width: "100%" }}>
      <Text style={styles.detailText}>{/* blank line */} </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text h2>Reviews</Text>
        <Button title="Leave a Review" onPress={onStartReviewPress} />
      </View>
      {reviews.map((review, i) => (
        <ReviewView review={review} key={i} />
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
