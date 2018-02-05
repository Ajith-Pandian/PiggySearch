import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  PRIMARY,
  PINK,
  BG_COLOR,
  SUB_CATEGORY_PARAMS as data,
  CATEGORY_PARAMS as categoryNames
} from "../Constants";

import CheckBox from "../Components/CheckBox";
import RoundedButton from "../Components/RoundedButton";

import Accordion from "react-native-collapsible/Accordion";

let dataArray = Object.keys(data).map(val => data[val]);

export default class FundCategory extends Component {
  render() {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          FundCategory
        </Text>
        <Accordion
          sections={dataArray}
          renderHeader={(section, i, isActive) => {
            return (
              <CheckBox
                key={i}
                isChecked={isActive}
                text={section.name}
                disabled={true}
                style={{ height: 50 }}
                onChange={() => {}}
              />
            );
          }}
          renderContent={(section, i, isActive) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  padding: 10
                }}
              >
                {section.value.map((item, index) => {
                  return (
                    <RoundedButton
                      key={index}
                      text={item.name}
                      onPress={isActive => console.log("pressed")}
                    />
                  );
                })}
              </View>
            );
          }}
        />
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
