import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { View } from "react-native";
import { ThemeProvider, Text, Divider, Button } from "react-native-elements";
import NewReviewScreen from "./NewReviewScreen";
import { SafeAreaView } from "react-navigation";
import ControlledInput from "../subviews/ControlledInput";

export default class NewCustomerScreen extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    showReview: true,
    review: {
      content: "",
      rating: 4
    }
  };

  createReview({ content, rating }) {
    const review = new Review({
      id: Math.floor(1000 + Math.random() * 9000),
      user: { firstName: "Sample", lastName: "User" },
      customerId: this.props.customer.id,
      content,
      rating
    });
    this.props.addNewReview(review);
    this.setState({ showReview: false });
  }

  cancelReview() {
    this.setState({ showReview: false });
  }

  Input = ({ propName }) => (
    <ControlledInput binder={this} propName={propName} />
  );

  render() {
    return (
      <SafeAreaView>
        <KeyboardAwareScrollView contentContainerStyle={styles.rootContainer}>
          <Text h2>New Customer</Text>
          <this.Input propName={"firstName"} />
          <this.Input propName={"lastName"} />
          <this.Input propName={"address"} />
          <this.Input propName={"phone"} />
          <this.Input propName={"email"} />
          <Button
            containerStyle={styles.buttonContainer}
            title={!this.state.showReview ? "Add a review" : "Cancel review"}
            onPress={() =>
              this.setState({ showReview: !this.state.showReview })
            }
          />
          {this.state.showReview && (
            <NewReviewScreen showButtons={false} parent={this} />
          )}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const text = {
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  body: {
    fontSize: 15,
    textAlign: "center"
  },
  note: { textAlign: "center", fontStyle: "italic" },
  unformatted: {
    fontFamily: null
  }
};

const styles = {
  rootContainer: { margin: 20, paddingBottom: 40 },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 40
  },
  inputContainer: {
    padding: 5
  },
  textContainer: {
    padding: 20
  },
  divider: {
    margin: 15,
    height: 4,
    borderRadius: 15,
    backgroundColor: "lightblue"
  },
  invisible: {
    backgroundColor: "transparent"
  }
};
