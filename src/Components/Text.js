import React from "react";
import { Text } from "react-native";

const TextComponent = props => {
  let { style, ...otherProps } = props;
  return <Text style={[{ color: "white" }, style]} {...otherProps} />;
};

export default TextComponent;
