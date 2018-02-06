import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { Text, StepSlider } from "../Components";

import { arrayToObject } from "../Utils";
import { PRIMARY, MINIMUM_INVESTMENTS } from "../Constants";
import { changeAmountFilter } from "../Store/Actions/FillerActions";

class AmountChooser extends Component {
  render() {
    let { minInvestments, _changeAmountFilter } = this.props;
    const steps = minInvestments.length;
    let startStep = minInvestments.findIndex(item => item.active);
    return (
      <View>
        <Text style={{ marginHorizontal: 15, marginVertical: 10 }}>
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
            steps={steps}
            startStep={startStep}
            onSelect={val => {
              _changeAmountFilter(minInvestments[val].name, true);
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10
            }}
          >
            {minInvestments.map((item, index) => {
              return <Text key={index}>{item.name}</Text>;
            })}
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ FilterReducer }) => {
  let { filters, isResultsVisible } = FilterReducer;
  return {
    minInvestments: filters[MINIMUM_INVESTMENTS.name],
    isResultsVisible
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  _changeAmountFilter: (childName, isActive) =>
    dispatch(changeAmountFilter(childName, isActive))
});
export default connect(mapStateToProps, mapDispatchToProps)(AmountChooser);
