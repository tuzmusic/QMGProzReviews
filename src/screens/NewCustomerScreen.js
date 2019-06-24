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

  Input = ({ propName }) => (
    <ControlledInput binder={this} propName={propName} />
  );

  toggleReviewing() {
    this.setState({ showReview: !this.state.showReview });
  }

  saveCustomer() {
    console.log("saving");
  }

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
          {this.state.showReview && (
            <NewReviewScreen showButtons={false} parent={this} />
          )}
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button
              type="outline"
              buttonStyle={styles.button}
              title={!this.state.showReview ? "Add a review" : "Cancel review"}
              onPress={this.toggleReviewing.bind(this)}
            />
            <Button
              buttonStyle={styles.button}
              title={"Save New Customer"}
              onPress={this.saveCustomer.bind(this)}
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  rootContainer: { margin: 20, paddingBottom: 40 },
  button: {
    marginVertical: 30,
    marginHorizontal: 40,
    borderWidth: 1.5
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
