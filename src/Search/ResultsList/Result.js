import React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "../../Components";

import { firstToUpper } from "../../Utils";
import { PRIMARY } from "../../Constants";

const Result = ({ item }) => {
  let { name, category, minimum_investment: min } = item;
  return (
    <View
      style={{
        width: "100%",
        margin: 10,
        padding: 10,
        backgroundColor: PRIMARY,
        margin: 1
      }}
    >
      <Text style={{ fontSize: 16, marginBottom: 10 }}>{name}</Text>
      <Text>{`${firstToUpper(category)} | Min Inv: ₹ ${min}`}</Text>
    </View>
  );
};

export default Result;
