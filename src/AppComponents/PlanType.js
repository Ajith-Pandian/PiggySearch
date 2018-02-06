import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { PRIMARY, PINK, BG_COLOR, PLAN_TYPES } from "../Constants";

import { Text, CheckBox, RoundedButton, RadioGroup } from "../Components";

import { changePlanFilter } from "../Store/Actions/FillerActions";

class PlanType extends Component {
  render() {
    let { planTypes, _changePlanFilter } = this.props;
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
          values={planTypes}
          onChange={({ name, isActive }) => _changePlanFilter(name, isActive)}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ FilterReducer }) => {
  let { filters, isResultsVisible } = FilterReducer;
  return { planTypes: filters[PLAN_TYPES.name], isResultsVisible };
};
const mapDispatchToProps = (dispatch, props) => ({
  _changePlanFilter: (childName, isActive) =>
    dispatch(changePlanFilter(childName, isActive))
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
