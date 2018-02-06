import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { connect } from "react-redux";

import { Text, RoundedButton } from "../Components";

import { PRIMARY, CATEGORIES } from "../Constants";
import { changeFilter } from "../Store/Actions/FillerActions";

class Category extends Component {
  render() {
    let { categories, _changeFilter } = this.props;
    return (
      <View style={{}}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          {CATEGORIES.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
            marginHorizontal: 10,
            backgroundColor: PRIMARY
          }}
        >
          {categories.map((item, index) => {
            const { name, active } = item;
            return (
              <RoundedButton
                key={index}
                isActive={active}
                text={name}
                onPress={isActive =>
                  _changeFilter(CATEGORIES.name, name, isActive)
                }
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ FilterReducer }) => {
  let { filters, isResultsVisible } = FilterReducer;
  return { categories: filters[CATEGORIES.name], isResultsVisible };
};
const mapDispatchToProps = (dispatch, props) => ({
  _changeFilter: (filterName, childName, isActive) =>
    dispatch(changeFilter(filterName, childName, isActive))
});
export default connect(mapStateToProps, mapDispatchToProps)(Category);
