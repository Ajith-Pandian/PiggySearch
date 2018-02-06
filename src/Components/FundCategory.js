import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { PRIMARY, PINK, BG_COLOR, CATEGORIES } from "../Constants";

import CheckBox from "../Components/CheckBox";
import RoundedButton from "../Components/RoundedButton";

import Accordion from "react-native-collapsible/Accordion";
import { changeSubFilter } from "../Store/Actions/FillerActions";
class FundCategory extends Component {
  render() {
    let { subCategories, _changeSubFilter } = this.props;
    return (
      <View style={{}}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          Fund Category
        </Text>
        <Accordion
          sections={subCategories}
          touchableComponent={TouchableOpacity}
          renderHeader={(section, i, isActive) => {
            let { name, active } = section;
            return (
              <CheckBox
                key={i}
                isChecked={active}
                text={name}
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
                  let { name, active } = item;
                  return (
                    <RoundedButton
                      key={index}
                      isActive={active}
                      text={name}
                      onPress={isActive =>
                        _changeSubFilter(section.name, name, isActive)
                      }
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
  let { filters, isResultsVisible } = FilterReducer;
  return { subCategories: filters[CATEGORIES.name], isResultsVisible };
};
const mapDispatchToProps = (dispatch, props) => ({
  _changeSubFilter: (parentName, childName, isActive) =>
    dispatch(changeSubFilter(parentName, childName, isActive))
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
