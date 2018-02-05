import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PRIMARY, PINK, BG_COLOR } from "../Constants";
import Button from "../Components/Button";
import RiskChooser from "../Components/RiskChooser";
import FundCategory from "../Components/FundCategory";

export default class BasicFilter extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <RiskChooser />
        <FundCategory />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60
  }
});
