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
import User from "../models/User";

class CustomerScreen extends Component {
  render() {
    const { customer } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ThemeProvider theme={theme}>
          <CustomerInfo customer={customer} />
          <Divider style={styles.divider} />
          <Text h2>Reviews</Text>
          <ReviewsList reviews={customer.reviews} />
          <ReviewForm />
        </ThemeProvider>
      </ScrollView>
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

const ReviewForm = props => {
  const styles = {
    buttonContainer: {
      alignItems: "center",
      paddingTop: 20,
      width: "100%"
    }
  };
  return (
    <View style={styles.buttonContainer}>
      <Button title="Leave a Review" style={styles.button} />
    </View>
  );
};

const ReviewsList = ({ reviews }) => {
  return reviews.map((review, i) => <Review review={review} key={i} />);
};

const Review = ({ review }) => {
  const user = new User(review.user);
  const styles = {
    reviewContainer: { marginTop: 10, width: "100%" },
    contentText: { fontStyle: "italic", fontSize: 18 },
    userText: { fontSize: 18, textAlign: "right" },
    dateText: { fontSize: 18, textAlign: "left" },
    rating: { padding: 5, alignItems: "flex-start" }
  };
  debugger;
  return (
    <View style={styles.reviewContainer}>
      <Rating
        readonly
        startingValue={review.rating}
        style={styles.rating}
        imageSize={20}
      />
      <Text style={styles.dateText}>{review.timePast}</Text>
      <Text style={styles.contentText}>{review.content}</Text>
      <Text style={styles.userText}>– {user.fullName}</Text>
    </View>
  );
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
  detailText: { fontSize: 18, paddingTop: 5 },
  rating: { padding: 5, alignItems: "flex-start" }
};

const theme = {
  Text: {
    color: "red"
  }
};
