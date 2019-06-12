import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import pluralize from "pluralize";

export class CustomerSearchResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { results } = this.props;

    if (!results.length) {
      return (
        <View style={styles.container}>
          <Text h4>Couldn't find any clients at that address.</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Found {pluralize("result", results.length, true)}:</Text>
          {results.map(c => {
            return (
              <TouchableOpacity
                key={c.id}
                onPress={() => this.props.onCustomerClick(c)}
              >
                <Text>{c.fullName}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
  }
}

export default connect()(CustomerSearchResultScreen);

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
