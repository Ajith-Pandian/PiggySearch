import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { PRIMARY, PINK, BG_COLOR, RISKS_PARAMS as data } from "../Constants";
import CheckBox from "../Components/CheckBox";
import { changeFilter } from "../Store/Actions/FillerActions";

class RiskChooser extends Component {
  render() {
    let { _changeFilter } = this.props;
    return (
      <View style={{}}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          Risks
        </Text>
        <View style={styles.container}>
          {Object.keys(data).map((key, index) => {
            const riskName = data[key].name;
            return (
              <CheckBox
                key={index}
                text={riskName}
                style={{ width: "50%", height: 50 }}
                onChange={() => {
                  _changeFilter(riskName);
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ FilterReducer }) => {
  let { filter, isResultsVisible } = FilterReducer;
  return { filter, isResultsVisible };
};
const mapDispatchToProps = (dispatch, props) => ({
  _changeFilter: filters => dispatch(changeFilter(filters))
});
export default connect(mapStateToProps, mapDispatchToProps)(RiskChooser);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: PRIMARY,
    marginHorizontal: 10
  }
});
