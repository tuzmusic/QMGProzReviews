import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import Sugar, { String } from "sugar";
Sugar.extend();

export class CustomerSearchResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { results } = this.props;
    console.log(results);

    if (!results.length) {
      return (
        <View style={styles.container}>
          <Text h4>Couldn't find any clients at that address.</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Results go here</Text>
          <Text>{results.length}</Text>
        </View>
      );
    }
  }
}

export default connect(({ customers }) => ({
  results: customers.searchResults
}))(CustomerSearchResultScreen);

const styles = {
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    background: "grey",
    borderColor: "blue",
    borderWidth: 1,
    height: 80,
    margin: 20,
    padding: 20
  }
};