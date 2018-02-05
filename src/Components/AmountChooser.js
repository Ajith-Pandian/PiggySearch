import React from "react";
import { Text, View } from "react-native";
import StepSlider from "./StepSlider";
import {
  PRIMARY,
  MINIMUM_INVESTMENTS,
  MINIMUM_INVESTMENTS_PARAMS as amount
} from "../Constants";
import { connect } from "react-redux";
import { changeAmountFilter } from "../Store/Actions/FillerActions";
import { arrayToObject } from "../Utils";
const AmountChooser = ({ _changeAmountFilter }) => {
  return (
    <View>
      <Text
        style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
      >
        {MINIMUM_INVESTMENTS.name}
      </Text>
      <View
        style={{
          height: 80,
          backgroundColor: PRIMARY,
          marginHorizontal: 10,
          padding: 10
        }}
      >
        <StepSlider
          steps={4}
          onSelect={val => {
            _changeAmountFilter(amount[val].name, true);
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          {amount.map((item, index) => {
            return (
              <Text key={index} style={{ color: "white" }}>
                {item.name}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = ({ FilterReducer }) => {
  let { filter, isResultsVisible } = FilterReducer;
  return { filter, isResultsVisible };
};
const mapDispatchToProps = (dispatch, props) => ({
  _changeAmountFilter: (childName, isActive) =>
    dispatch(changeAmountFilter(childName, isActive))
});
export default connect(mapStateToProps, mapDispatchToProps)(AmountChooser);
