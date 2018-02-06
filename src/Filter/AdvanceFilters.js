import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { connect } from "react-redux";

import { Text, Button, CheckBox } from "../Components";

import { PRIMARY, PINK, BG_COLOR, FUND_HOUSES } from "../Constants";
import { changeFilter } from "../Store/Actions/FillerActions";

class AdvanceFilter extends Component {
  render() {
    let { fundHouses, _changeFilter } = this.props;
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          {FUND_HOUSES.name}
        </Text>
        {fundHouses.map((item, index) => {
          const houseName = item.name;
          let { name, active } = item;
          return (
            <CheckBox
              key={index}
              isChecked={active}
              text={name}
              style={{ height: 50, marginVertical: 1 }}
              onChange={isActive =>
                _changeFilter(FUND_HOUSES.name, name, isActive)
              }
            />
          );
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ FilterReducer }) => {
  let { filters, isResultsVisible } = FilterReducer;
  return { fundHouses: filters[FUND_HOUSES.name], isResultsVisible };
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
