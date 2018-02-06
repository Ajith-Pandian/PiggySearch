import React from "react";
import { View } from "react-native";

import { Button } from "../Components";
import { Amount, Category } from "../AppComponents";

const PrimaryFilter = ({ onSearchPress }) => {
  return (
    <View style={{}}>
      <View style={{ flex: 1, justifyContent: "center", marginVertical: 40 }}>
        <Amount />
        <Category />
      </View>
      <Button
        text={"SEARCH"}
        style={{
          position: "absolute",
          bottom: 0,
          width: "98%"
        }}
        onPress={() => onSearchPress()}
      />
    </View>
  );
};

export default PrimaryFilter;
