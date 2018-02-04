import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import StepSlider from "./StepSlider";

export default class RoundedButton extends Component {
  state = { isActive: false };
  render() {
    let { text, onPress, style, textStyle } = this.props;
    let { isActive } = this.state;
    return (
      <TouchableOpacity
        onPress={() =>
          this.setState(
            prevState => ({
              isActive: !prevState.isActive
            }),
            () => onPress(this.state.isActive)
          )
        }
        style={[
          {
            height: 40,
            backgroundColor: isActive ? "blue" : "powderblue",
            margin: 5,
            padding: 15,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center"
          },
          style
        ]}
      >
        <Text
          style={[
            {
              color: "white",
              fontSize: 16,
              textAlign: "center",
              textAlignVertical: "center"
            },
            textStyle
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
