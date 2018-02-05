import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

import { PRIMARY, PINK, BG_COLOR } from "../Constants";

const Button = ({ text, onPress, style, textStyle, isBottom }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        {
          backgroundColor: PINK,
          margin: 2,
          alignItems: "center",
          paddingVertical: 10
        },
        isBottom
          ? {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0
            }
          : null,
        style
      ]}
    >
      <Text style={[{ color: "white" }, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
