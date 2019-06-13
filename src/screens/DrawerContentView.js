import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";

class DrawerContentView extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Text> Logged in as {this.props.user.username} </Text>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default connect(({ auth }) => ({ user: auth.user }))(DrawerContentView);

const styles = {
  container: {
    alignItems: "center"
  }
};
