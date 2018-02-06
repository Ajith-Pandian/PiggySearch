import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { TabNavigator } from "react-navigation";
import { connect } from "react-redux";

import { Text, Button } from "../Components";
import BasicFilters from "./BasicFilters";
import AdvanceFilters from "./AdvanceFilters";
import { PRIMARY, PINK, BG_COLOR } from "../Constants";
import { fetchResult, resetFilters } from "../Store/Actions/FillerActions";

const FilterTabs = TabNavigator(
  {
    Basic: { screen: BasicFilters },
    Advance: { screen: AdvanceFilters }
  },
  {
    tabBarOptions: {
      labelStyle: {},
      style: {
        backgroundColor: PRIMARY
      },
      indicatorStyle: {
        backgroundColor: "white"
      }
    }
  }
);
class FilterPage extends Component {
  render() {
    let { _fetchResult, navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: BG_COLOR
        }}
      >
        <FilterTabs />
        <Button
          text={"APPLY FILTERS"}
          style={{
            position: "absolute",
            bottom: 0,
            width: "98%"
          }}
          textStyle={{}}
          onPress={() => {
            _fetchResult();
            navigation.goBack();
          }}
        />
      </View>
    );
  }
}
const ResetButton = ({ dispatch }) => (
  <Button
    text={"RESET"}
    style={{ backgroundColor: "transparent", marginHorizontal: 10 }}
    textStyle={{ color: PINK }}
    onPress={() => dispatch(resetFilters())}
  />
);
const Reset = connect()(ResetButton);
FilterPage.navigationOptions = {
  title: "Filters",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: PRIMARY,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    elevation: 0
  },

  headerRight: <Reset />
};
const mapStateToProps = ({ FilterReducer }) => {
  let { filters } = FilterReducer;
  return { filters };
};
const mapDispatchToProps = (dispatch, props) => ({
  _fetchResult: filters => dispatch(fetchResult())
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
