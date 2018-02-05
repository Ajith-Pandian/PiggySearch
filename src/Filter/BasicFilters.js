import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PRIMARY, PINK, BG_COLOR } from "../Constants";
import Button from "../Components/Button";
import RiskChooser from "../Components/RiskChooser";

export default class BasicFilter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RiskChooser />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: BG_COLOR
  }
});
