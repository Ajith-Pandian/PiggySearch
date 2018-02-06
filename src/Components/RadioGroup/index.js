import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "../../Components";

import RadioButton from "./RadioButton";

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    let { values } = props;
    values = values.map(item => ({ ...item, isActive: item.active || false }));
    this.state = { initialValues: values, values };
  }
  handleRadioChange = (index, isActive) => {
    let { initialValues } = this.state;
    const { onChange } = this.props;
    let values = initialValues.map((item, i) => ({
      ...item,
      isActive: i === index
    }));
    this.setState({ values }, () => onChange(this.state.values[index]));
  };
  render() {
    let { style, buttonStyle } = this.props;
    let { values } = this.state;
    return (
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          },
          style
        ]}
      >
        {values.map((item, index) => (
          <RadioButton
            key={index}
            text={item.name}
            isActive={item.isActive}
            style={buttonStyle}
            onChange={isActive => {
              this.handleRadioChange(index, isActive);
            }}
          />
        ))}
      </View>
    );
  }
}

export default RadioGroup;
