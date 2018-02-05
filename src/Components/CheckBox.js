import React, { Component } from "react";
import Check from "react-native-check-box";
import { PRIMARY } from "../Constants";
const CheckBox = ({
  text,
  checked,
  style,
  onChange,
  disabled = false,
  isChecked = false
}) => (
  <Check
    style={[
      {
        padding: 10,
        height: 40,
        backgroundColor: PRIMARY
      },
      style
    ]}
    leftTextStyle={{ color: "white" }}
    checkBoxColor={"white"}
    disabled={disabled}
    onClick={checked => onChange(checked)}
    isChecked={isChecked}
    leftText={text}
  />
);

export default CheckBox;
