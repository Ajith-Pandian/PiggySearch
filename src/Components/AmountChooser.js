import React from "react";
import { Text, View } from "react-native";
import StepSlider from "./StepSlider";
import { PRIMARY } from "../Constants";

const MinAmtChooser = () => {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: PRIMARY,
        marginHorizontal: 10,
        padding: 10
      }}
    >
      <StepSlider />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text style={{ textAlign: "left", color: "white" }}>100</Text>
        <Text style={{ paddingLeft: 10, color: "white" }}>500</Text>
        <Text style={{ paddingLeft: 10, color: "white" }}>1000</Text>
        <Text style={{ textAlign: "right", color: "white" }}>1000+</Text>
      </View>
    </View>
  );
};
export default MinAmtChooser;
