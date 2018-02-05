import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { PRIMARY, PINK, BG_COLOR, PLAN_TYPES } from "../Constants";

import CheckBox from "../Components/CheckBox";
import RoundedButton from "../Components/RoundedButton";
import RadioGroup from "../Components/RadioGroup";

let radio_props = [
  { label: "param1", value: 0 },
  { label: "param2", value: 1 }
];

class PlanType extends Component {
  render() {
    return (
      <View style={{}}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          {PLAN_TYPES.name}
        </Text>
        <RadioGroup
          style={{
            backgroundColor: PRIMARY,
            marginHorizontal: 10,
            paddingVertical: 5
          }}
          values={PLAN_TYPES.children}
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
export default connect(mapStateToProps, mapDispatchToProps)(PlanType);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: PRIMARY,
    marginHorizontal: 10
  }
});
