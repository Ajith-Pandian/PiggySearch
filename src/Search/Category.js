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
          {Object.keys(CATEGORY_PARAMS).map((key, index) => (
            <RoundedButton
              key={index}
              text={CATEGORY_PARAMS[key].name}
              onPress={isActive => console.log("pressed")}
            />
          ))}
        </View>
      </View>
    );
  }
}
