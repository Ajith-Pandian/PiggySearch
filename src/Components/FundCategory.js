import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { PRIMARY, PINK, BG_COLOR, CATEGORIES } from "../Constants";

import CheckBox from "../Components/CheckBox";
import RoundedButton from "../Components/RoundedButton";

import Accordion from "react-native-collapsible/Accordion";

class FundCategory extends Component {
  render() {
    return (
      <View style={{}}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          Fund Category
        </Text>
        <Accordion
          sections={CATEGORIES.children}
          renderHeader={(section, i, isActive) => {
            return (
              <CheckBox
                key={i}
                isChecked={isActive}
                text={section.name}
                disabled={true}
                style={{
                  height: 50,
                  marginHorizontal: 10
                }}
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
                {section.children.map((item, index) => {
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

const mapStateToProps = ({ FilterReducer }) => {
  let { filter, isResultsVisible } = FilterReducer;
  return { filter, isResultsVisible };
};
const mapDispatchToProps = (dispatch, props) => ({
  _changeFilter: (filterName, childName, isActive) =>
    dispatch(changeFilter(filterName, childName, isActive))
});
export default connect(mapStateToProps, mapDispatchToProps)(FundCategory);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: PRIMARY,
    marginHorizontal: 10
  }
});
