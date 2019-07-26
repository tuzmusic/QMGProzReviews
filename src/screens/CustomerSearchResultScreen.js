import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, ListItem } from "react-native-elements";
import pluralize from "pluralize";

export class CustomerSearchResultScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    title: "poop";
  };
  automate() {
    if (this.props.results.length) {
      const c = this.props.results[0];
      this.props.onCustomerClick(c);
    }
  }

  componentDidMount() {
    // this.automate();
  }

  render() {
    const { results } = this.props;

    return !results.length ? (
      <View style={styles.container}>
        <Text h4>Couldn't find any clients at that address.</Text>
      </View>
    ) : (
      <View style={styles.container}>
        <Text>Found {pluralize("result", results.length, true)}:</Text>
        <View style={styles.resultsContainer}>
          <CustomerList
            customers={results}
            onCustomerClick={this.props.onCustomerClick}
          />
        </View>
      </View>
    );
  }
}

const CustomerList = ({ customers, onCustomerClick }) => {
  return customers.map(c => {
    return (
      <CustomerCell
        customer={c}
        key={c.id}
        onPress={onCustomerClick.bind(this, c)}
      />
    );
  });
};

const CustomerCell = ({ customer, onPress }) => (
  <View style={styles.resultContainer} key={customer.id}>
    <TouchableOpacity onPress={onPress.bind(this, customer)}>
      <Text style={styles.result}>{customer.fullName}</Text>
    </TouchableOpacity>
  </View>
);

export default CustomerSearchResultScreen;

const styles = {
  resultsContainer: { marginTop: 10, width: "100%", alignItems: "flow-end" },
  resultContainer: {
    padding: 10,
    width: "95%",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: "grey"
  },
  result: { fontSize: 16, fontWeight: "bold" },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    background: "grey"
    // margin: 20,
    // padding: 20
  }
};
