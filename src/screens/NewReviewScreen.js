import React, { Component } from "react";
import { Text, Input, Button, AirbnbRating } from "react-native-elements";
import { View } from "react-native";

export default class NewReviewScreen extends Component {
  state = {
    text:
      "If true, the text input can be multiple lines. The default value is false. It is important to note that this aligns the text to the top on iOS, and centers it on Android. Use with textAlignVertical set to top for the same behavior in both platforms.",
    text: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <AirbnbRating defaultRating={5} />
        <Input
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          clearButtonMode={"while-editing"}
          containerStyle={{ padding: 0 }}
          placeholder={"Enter your review"}
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          multiline={true}
          textAlignVertical={"top"}
          numberOfLines={100}
        />
        <Button title="Submit" />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  },
  input: {
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 200
  },
  inputContainer: {
    borderBottomWidth: 0,
    marginVertical: 15,
    marginHorizontal: 5
  }
};
