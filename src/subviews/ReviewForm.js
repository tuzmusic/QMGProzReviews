import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

export default (ReviewForm = props => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Leave a Review" style={styles.button} />
    </View>
  );
});

const styles = {
  buttonContainer: {
    alignItems: "center",
    paddingTop: 20,
    width: "100%"
  }
};
