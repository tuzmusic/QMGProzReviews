import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authActions";

class DrawerContentView extends Component {
  componentDidMount() {
    // setTimeout(this.props.logout, 500);
  }

  shouldComponentUpdate(newProps) {
    if (!newProps.user) {
      this.props.navigation.navigate("Auth");
      return false;
    }
    return true;
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <SafeAreaView>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Logged in as {this.props.user.username}
          </Text>
          <Button
            title="Log Out"
            buttonStyle={styles.button}
            onPress={this.props.logout}
            loading={this.props.isLoading}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default connect(
  ({ auth }) => ({ user: auth.user?.user, isLoading: auth.isLoading }),
  { logout }
)(DrawerContentView);

const styles = {
  container: {
    alignItems: "center",
    marginVertical: 20
  },
  button: {
    margin: 20,
    backgroundColor: "red"
  }
};
