import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { View } from "react-native";
import {
  ThemeProvider,
  Text,
  Divider,
  Button,
  Input
} from "react-native-elements";

export default class NewCustomerScreen extends Component {
  state = {};
  render() {
    return (
      <KeyboardAwareScrollView>
        <ControlledInput binder={this} propName={"firstName"} />
        <ControlledInput binder={this} propName={"lastName"} />
        <ControlledInput binder={this} propName={"address"} />
        <ControlledInput binder={this} propName={"phone"} />
      </KeyboardAwareScrollView>
    );
  }
}

const ControlledInput = ({ binder, ...props }) => {
  return (
    <View style={[styles.inputContainer, props.containerStyle]}>
      <Input
        style={[props.inputStyle, styles.input]}
        placeholder={props.placeholder || props.propName.titleize()}
        label={
          binder.state[props.propName] &&
          (props.placeholder || props.propName.titleize())
        }
        value={binder.state[props.propName]}
        errorMessage={props.errorMessage}
        onBlur={props.onBlur}
        onChangeText={
          props.onChangeText ||
          (value => binder.setState({ [props.propName]: value }))
        }
        keyboardType={props.keyboardType}
        textAlign={props.textAlign}
        multiline={props.multiline}
        numberOfLines={5} // android only, eh?
      />
    </View>
  );
};

const text = {
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  body: {
    fontSize: 15,
    textAlign: "center"
  },
  note: { textAlign: "center", fontStyle: "italic" },
  unformatted: {
    fontFamily: null
  }
};

const styles = {
  input: {},
  rowElement: {
    width: 150
  },
  rowContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  button: {
    padding: 15,
    paddingBottom: 0
  },
  inputContainer: {
    padding: 5
  },
  textContainer: {
    padding: 20
  },
  divider: {
    margin: 15,
    height: 4,
    borderRadius: 15,
    backgroundColor: "lightblue"
  },
  invisible: {
    backgroundColor: "transparent"
  },
  prediction: {
    padding: 2,
    margin: 2,
    marginLeft: 3,
    marginRight: 3,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.5
  },
  predictionsContainer: {
    borderColor: "lightgrey",
    borderWidth: 0.5,
    borderTopWidth: 0,
    marginLeft: 15,
    marginRight: 15,
    marginTop: -5
  }
};
