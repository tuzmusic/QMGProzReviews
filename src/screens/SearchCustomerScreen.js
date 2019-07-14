import React, { Component } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { View } from "react-native";
import { Text, Input, Button, Overlay } from "react-native-elements";
import { connect } from "react-redux";
import { searchCustomers } from "../redux/action-creators/customerActionCreators";

export class SearchCustomerScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: "Search"
  });

  automate() {
    this.handleSearch();
    // this.props.navigation.toggleDrawer();
  }

  componentDidMount = () => {
    setTimeout(this.automate.bind(this), 100);
  };

  state = {
    text: "55-57 59th St",
    text: "",
    text: "123 Main St",
    searchField: "address"
  };

  async handleSearch() {
    await this.props.searchCustomers({
      customers: this.props.customers,
      ...this.state
    });
    const results = this.props.searchResults;
    this.props.navigation.navigate("Results", { results });
  }

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text h4>Search for your Client </Text>
        <Text style={{ marginTop: 10 }}>What's your client's address?</Text>
        <Input
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          clearButtonMode={"while-editing"}
          containerStyle={{ padding: 0 }}
          placeholder={"Enter address"}
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
        <Button
          title="Search"
          type="outline"
          onPress={this.handleSearch.bind(this)}
        />
      </KeyboardAwareScrollView>
    );
  }
}

export default connect(
  ({ customers }) => ({
    customers: customers.customers,
    searchResults: customers.searchResults
  }),
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
    borderWidth: borderWidth,
    borderRadius: borderRadius,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  inputContainer: {
    borderBottomWidth: 0,
    marginVertical: 15,
    marginHorizontal: 5
  }
};
