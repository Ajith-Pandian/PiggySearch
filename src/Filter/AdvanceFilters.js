import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";

import { PRIMARY, PINK, BG_COLOR, FUND_HOUSES } from "../Constants";
import Button from "../Components/Button";
import CheckBox from "../Components/CheckBox";
import { changeFilter } from "../Store/Actions/FillerActions";

class AdvanceFilter extends Component {
  render() {
    let { _changeFilter } = this.props;
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          {FUND_HOUSES.name}
        </Text>
        {FUND_HOUSES.children.map((item, index) => {
          const houseName = item.name;
          return (
            <CheckBox
              key={index}
              isChecked={false}
              text={houseName}
              style={{ height: 50, marginVertical: 1 }}
              onChange={isActive =>
                _changeFilter(FUND_HOUSES.name, houseName, isActive)
              }
            />
          );
        })}
      </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(AdvanceFilter);

const styles = StyleSheet.create({
  container: {
    backgroundColor: BG_COLOR,
    paddingBottom: 60,
    paddingHorizontal: 10,
    paddingTop: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
