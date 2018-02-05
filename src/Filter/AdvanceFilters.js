import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PRIMARY, PINK, BG_COLOR, FUND_HOUSES as data } from "../Constants";
import Button from "../Components/Button";
import CheckBox from "../Components/CheckBox";

export default class BasicFilter extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          Fund House
        </Text>
        {data.value.map((item, index) => (
          <CheckBox
            key={index}
            isChecked={false}
            text={item.name}
            style={{ height: 50, marginVertical: 1 }}
            onChange={() => {}}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BG_COLOR,
    paddingBottom: 60,
    paddingHorizontal: 10,
    paddingTop: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
