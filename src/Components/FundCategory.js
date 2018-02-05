import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { PRIMARY, PINK, BG_COLOR, CATEGORIES } from "../Constants";

import CheckBox from "../Components/CheckBox";
import RoundedButton from "../Components/RoundedButton";

import Accordion from "react-native-collapsible/Accordion";
import { changeSubFilter } from "../Store/Actions/FillerActions";
class FundCategory extends Component {
  render() {
    let { _changeSubFilter } = this.props;
    return (
      <View style={{}}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          Fund Category
        </Text>
        <Accordion
          sections={CATEGORIES.children}
          touchableComponent={TouchableOpacity}
          renderHeader={(section, i, isActive) => {
            return (
              <View>
                <CheckBox
                  key={i}
                  isChecked={isActive}
                  text={section.name}
                  disabled={true}
                  style={{
                    height: 50,
                    marginHorizontal: 10
                  }}
                  onChange={() => {}}
                />
                {section.children.map((item, index) => {
                  const subName = item.name;
                  return (
                    <RoundedButton
                      key={index}
                      text={subName}
                      onPress={isActive =>
                        _changeSubFilter(section.name, subName, isActive)
                      }
                    />
                  );
                })}
              </View>
            );
          }}
          renderContent={(section, i, isActive) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  padding: 10
                }}
              >
                {section.children.map((item, index) => {
                  const subName = item.name;
                  return (
                    <RoundedButton
                      key={index}
                      text={subName}
                      onPress={isActive =>
                        _changeSubFilter(section.name, subName, isActive)
                      }
                    />
                  );
                })}
              </View>
            );
          }}
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
  _changeSubFilter: (parentName, childName, isActive) =>
    dispatch(changeSubFilter(parentName, childName, isActive))
});
export default connect(mapStateToProps, mapDispatchToProps)(FundCategory);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: PRIMARY,
    marginHorizontal: 10
  }
});
