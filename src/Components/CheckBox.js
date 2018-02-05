import React, { Component } from "react";
import Check from "react-native-check-box";
import { PRIMARY } from "../Constants";
const CheckBox = ({ text, checked, style, onChange }) => (
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
    onClick={checked => onChange(checked)}
    isChecked={true}
    leftText={text}
  />
);

export default CheckBox;
