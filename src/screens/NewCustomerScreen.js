import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { View } from "react-native";
import {
  ThemeProvider,
  Text,
  Divider,
  Button,
  Input
} from "react-native-elements";
import NewReviewScreen from "./NewReviewScreen";
import { SafeAreaView } from "react-navigation";
import ControlledInput from "../subviews/ControlledInput";

export default class NewCustomerScreen extends Component {
  state = { showReview: false };

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

  render() {
    return (
      <SafeAreaView>
        <KeyboardAwareScrollView contentContainerStyle={styles.rootContainer}>
          <Text h2>New Customer</Text>
          <ControlledInput binder={this} propName={"firstName"} />
          <ControlledInput binder={this} propName={"lastName"} />
          <ControlledInput binder={this} propName={"address"} />
          <ControlledInput binder={this} propName={"phone"} />
          <ControlledInput binder={this} propName={"email"} />
          <Button
            style={styles.buttonContainer}
            title={!this.state.showReview ? "Add a review" : "Cancel review"}
            onPress={() =>
              this.setState({ showReview: !this.state.showReview })
            }
          />
          {/* <ControlledInput
      binder={this}
      propName={"reviewContent"}
      placeholder={"Enter a review"}
      multiline={true}
      /> */}
          {this.state.showReview && (
            <NewReviewScreen
              onCancel={this.cancelReview.bind(this)}
              onSubmit={this.createReview.bind(this)}
            />
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
  rootContainer: { margin: 10 },
  rowElement: {
    width: 150
  },
  rowContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  button: {
    padding: 15,
    paddingBottom: 0
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
