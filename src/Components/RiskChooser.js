import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PRIMARY, PINK, BG_COLOR, RISKS_PARAMS as data } from "../Constants";
import CheckBox from "../Components/CheckBox";

export default class RiskChooser extends Component {
  render() {
    return (
      <View style={{}}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          Risks
        </Text>
        <View style={styles.container}>
          {Object.keys(data).map((key, index) => (
            <CheckBox
              key={index}
              text={data[key].name}
              style={{ width: "50%", height: 50 }}
              onChange={() => {}}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: PRIMARY,
    marginHorizontal: 10
  }
});
