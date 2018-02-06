import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "../../Components";

import Radio from "./RadioIcon";

class RadioButton extends Component {
  constructor(props) {
    super(props);
    let { isActive = false } = props;
    this.state = { isActive };
  }
  componentWillReceiveProps(nextProps) {
    let { isActive } = nextProps;
    this.setState({ isActive });
  }
  render() {
    let { isActive } = this.state;
    let { onChange, text, style } = this.props;
    return (
      <TouchableOpacity
        style={[
          { flexDirection: "row", padding: 5, alignItems: "center" },
          style
        ]}
        onPress={() =>
          this.setState(
            prevState => ({ isActive: !prevState.isActive }),
            () => onChange(this.state.isActive)
          )
        }
      >
        <Radio selected={isActive} />
        <Text style={{ marginHorizontal: 5 }}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default RadioButton;
