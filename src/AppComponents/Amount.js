import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { Text, StepSlider } from "../Components";

import { arrayToObject } from "../Utils";
import { PRIMARY, MINIMUM_INVESTMENTS } from "../Constants";
import { sSectionHeader, sSectionItems } from "../Styles";
import { changeAmountFilter } from "../Store/Actions/FillerActions";

class AmountChooser extends Component {
  render() {
    let { minInvestments, _changeAmountFilter } = this.props;
    const steps = minInvestments.length;
    let startStep = minInvestments.findIndex(item => item.active);
    let { sCompContainer, sTextContainer } = styles;
    return (
      <View>
        <Text style={sSectionHeader}>{MINIMUM_INVESTMENTS.name}</Text>
        <View style={[sSectionItems, sCompContainer]}>
          <StepSlider
            steps={steps}
            startStep={startStep}
            onSelect={val => {
              _changeAmountFilter(minInvestments[val].name, true);
            }}
          />
          <View style={sTextContainer}>
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
  let { filters } = FilterReducer;
  return {
    minInvestments: filters[MINIMUM_INVESTMENTS.name]
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  _changeAmountFilter: (childName, isActive) =>
    dispatch(changeAmountFilter(childName, isActive))
});

export default connect(mapStateToProps, mapDispatchToProps)(AmountChooser);

const styles = StyleSheet.create({
  sCompContainer: {
    height: 80
  },
  sTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10
  }
});
