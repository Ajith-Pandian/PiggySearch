import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { PRIMARY, PINK, BG_COLOR } from "../Constants";

import { Text, Button } from "../Components";
import { Risks, FundCategory, Amount, PlanType } from "../AppComponents";

export default class BasicFilter extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.sContainer}>
        <PlanType />
        <Risks />
        <Amount />
        <FundCategory />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sContainer: {
    paddingBottom: 60,
    marginHorizontal: 10
  }
});
