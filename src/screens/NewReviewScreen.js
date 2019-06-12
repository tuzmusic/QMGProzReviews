import React, { Component } from "react";
import { Text, Input, Button, AirbnbRating } from "react-native-elements";
import { View, StyleSheet } from "react-native";

export default class NewReviewScreen extends Component {
  state = {
    text:
      "If true, the text input can be multiple lines. The default value is false. It is important to note that this aligns the text to the top on iOS, and centers it on Android. Use with textAlignVertical set to top for the same behavior in both platforms.",
    text: "",
    rating: 5
  };
  rate(rating) {}
  handleSubmit() {
    console.log(this.state);
  }
  render() {
    debugger;
    return (
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingLabel}>Rating</Text>
          <AirbnbRating
            defaultRating={this.state.rating}
            showRating={false}
            onFinishRating={rating => this.setState({ rating })}
            imageSize={10}
          />
        </View>
        <Input
          ref={ref => (this.textInput = ref)}
          label={"Review"}
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholder={"Enter your review"}
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          multiline={true}
          textAlignVertical={"top"}
          numberOfLines={100}
          labelStyle={styles.ratingLabel}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Submit" onPress={this.handleSubmit.bind(this)} />
          <Button title="Cancel" type="outline" onPress={this.props.onCancel} />
        </View>
      </View>
    );
  }
}

const border = { borderColor: "blue", borderWidth: 0.5 };

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 30
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%"
  },
  input: {
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 200
  },
  inputContainer: {
    borderBottomWidth: 0,
    marginVertical: 15,
    marginHorizontal: 5
  },
  ratingContainer: { width: "100%", paddingHorizontal: 10, marginBottom: 15 },
  ratingLabel: {
    textAlign: "left",
    alignItems: "flex-start",
    color: "grey",
    fontWeight: "bold",
    fontSize: 16
  }
};
