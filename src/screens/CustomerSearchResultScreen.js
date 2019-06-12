import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import pluralize from "pluralize";

export class CustomerSearchResultScreen extends Component {
  automate() {
    const c = this.props.results[0];
    this.props.onCustomerClick(c);
  }

  componentDidMount() {
    this.automate();
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
          <View style={styles.resultsContainer}>
            {results.map(c => {
              return (
                <View style={styles.resultContainer} key={c.id}>
                  <TouchableOpacity
                    onPress={this.props.onCustomerClick.bind(this, c)}
                  >
                    <Text style={styles.result}>{c.fullName}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      );
    }
  }
}

export default CustomerSearchResultScreen;

const styles = {
  resultsContainer: { marginTop: 10 },
  resultContainer: { padding: 10 },
  result: { fontSize: 16, fontWeight: "bold" },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    background: "grey",
    // borderColor: "blue",
    // borderWidth: 1,
    margin: 20,
    padding: 20
  }
};
