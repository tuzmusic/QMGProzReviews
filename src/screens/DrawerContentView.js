import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authActions";

class DrawerContentView extends Component {
  componentDidMount() {
    // setTimeout(this.props.logout, 500);
  }

  shouldComponentUpdate(newProps) {
    if (!newProps.user) {
      // just logged out
      this.props.navigation.navigate("Auth");
      return false;
    }
    return true;
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <UserSection props={this.props} />
          <DrawerItems {...this.props} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const UserSection = ({ props }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Logged in as {props.user.username}
      </Text>
      <Button
        title="Log Out"
        buttonStyle={styles.button}
        onPress={props.logout}
        loading={props.isLoading}
      />
    </View>
  );
};

export default connect(
  ({ auth }) => ({ user: auth.user?.user, isLoading: auth.isLoading }),
  { logout }
)(DrawerContentView);

const styles = {
  container: {
    // alignItems: "center",
    marginVertical: 50
  },
  button: {
    margin: 20,
    backgroundColor: "red"
  }
};
