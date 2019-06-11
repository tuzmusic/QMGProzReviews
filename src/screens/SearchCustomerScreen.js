import React, { Component } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { connect } from "react-redux";
import { searchCustomers } from "../redux/actions/customerActions";

export class SearchCustomerScreen extends Component {
  state = {
    text: "55-57 59th St",
    searchField: "address"
  };

  handleSearch() {
    const result = searchCustomers({
      customers: this.props.customers,
      ...this.state
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text h4>Search for your Client </Text>
        <Text style={{ marginTop: 10 }}>What's your client's address?</Text>
        <Input
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          containerStyle={{ padding: 0 }}
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
        <Button
          title="Search"
          type="outline"
          onPress={this.handleSearch.bind(this)}
        />
      </View>
    );
  }
}

export default connect(
  ({ customers }) => ({ customers: customers.customers }),
  { searchCustomers }
)(SearchCustomerScreen);

const borderWidth = 0.5;
const borderRadius = 30;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderColor: "grey",
    borderTopWidth: borderWidth,
    borderBottomWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderLeftWidth: borderWidth,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  inputContainer: {
    borderBottomWidth: 0,
    marginVertical: 15,
    marginHorizontal: 5
  }
};
