import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import { PRIMARY, PINK, BG_COLOR } from "../Constants";
import Button from "../Components/Button";
import BasicFilters from "./BasicFilters";
import AdvanceFilters from "./AdvanceFilters";

const FilterTabs = TabNavigator(
  {
    Basic: { screen: BasicFilters },
    Advance: { screen: AdvanceFilters }
  },
  {
    tabBarOptions: {
      labelStyle: {},
      style: {
        backgroundColor: PRIMARY
      },
      indicatorStyle: {
        backgroundColor: "white"
      }
    }
  }
);
export default class FilterPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: BG_COLOR
        }}
      >
        <FilterTabs />
        <Button
          text={"APPLY FILTERS"}
          style={{
            position: "absolute",
            bottom: 0,
            width: "98%"
          }}
          textStyle={{}}
          onPress={() => {}}
        />
      </View>
    );
  }
}

FilterPage.navigationOptions = {
  title: "Filters",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: PRIMARY,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    elevation: 0
  },

  headerRight: (
    <Button
      text={"RESET"}
      style={{ backgroundColor: "transparent", marginHorizontal: 10 }}
      textStyle={{ color: PINK }}
      onPress={() => {}}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
