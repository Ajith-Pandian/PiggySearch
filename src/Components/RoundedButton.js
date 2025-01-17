import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";

import StepSlider from "./StepSlider";
import Text from "./Text";

import { PINK, PINK_DARK } from "../Constants";

export default class RoundedButton extends Component {
  constructor(props) {
    super(props);
    let { isActive = false } = props;
    this.state = { isActive };
  }
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
            backgroundColor: isActive ? PINK : PINK_DARK,
            margin: 5,
            paddingHorizontal: 15,
            paddingVertical: 10,
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
