import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

import Text from "./Text";
import { PRIMARY, PINK, BG_COLOR } from "../Constants";

const Button = ({ text, onPress, style, textStyle, isBottom }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
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
