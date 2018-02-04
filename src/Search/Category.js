import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import RoundedButton from "../Components/RoundedButton";
import { PRIMARY, CATEGORIES, CATEGORY_PARAMS } from "../Constants";
export default class Category extends Component {
  render() {
    return (
      <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
        <Text style={{ color: "white" }}>Categories</Text>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
            backgroundColor: PRIMARY
          }}
        >
          <RoundedButton
            text={"Commodities"}
            onPress={() => console.log("pressed")}
          />
          <RoundedButton text={"Dept"} onPress={() => console.log("pressed")} />
          <RoundedButton
            text={"Hybrid"}
            onPress={() => console.log("pressed")}
          />
          <RoundedButton
            text={"Equity"}
            onPress={() => console.log("pressed")}
          />
        </View>
      </View>
    );
  }
}
