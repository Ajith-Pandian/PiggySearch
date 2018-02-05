import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import RoundedButton from "../Components/RoundedButton";
import { PRIMARY, CATEGORIES } from "../Constants";
import { changeFilter } from "../Store/Actions/FillerActions";

class Category extends Component {
  render() {
    let { _changeFilter } = this.props;
    return (
      <View style={{}}>
        <Text
          style={{ color: "white", marginHorizontal: 15, marginVertical: 10 }}
        >
          {CATEGORIES.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
            marginHorizontal: 10,
            backgroundColor: PRIMARY
          }}
        >
          {CATEGORIES.children.map((item, index) => {
            const categoryName = item.name;
            return (
              <RoundedButton
                key={index}
                text={categoryName}
                onPress={isActive =>
                  _changeFilter(CATEGORIES.name, categoryName, isActive)
                }
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
  _changeFilter: (filterName, childName, isActive) =>
    dispatch(changeFilter(filterName, childName, isActive))
});
export default connect(mapStateToProps, mapDispatchToProps)(Category);
