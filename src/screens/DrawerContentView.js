import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

export default class DrawerContentView extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Text> DrawerContentView </Text>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    alignItems: "center"
  }
};
