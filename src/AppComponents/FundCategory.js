import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { connect } from "react-redux";

import { Text, CheckBox, RoundedButton } from "../Components";

import { PRIMARY, PINK, BG_COLOR, CATEGORIES } from "../Constants";
import { sSectionHeader, sSectionItems } from "../Styles";

import { changeSubFilter } from "../Store/Actions/FillerActions";

class FundCategory extends Component {
  render() {
    let { subCategories, _changeSubFilter } = this.props;
    return (
      <View>
        <Text style={sSectionHeader}>Fund Category</Text>
        <Accordion
          sections={subCategories}
          touchableComponent={TouchableOpacity}
          renderHeader={(section, i, isActive) => {
            let { name, active } = section;
            return (
              <CheckBox
                key={i}
                isChecked={active}
                text={name}
                disabled={true}
                style={{ height: 50 }}
              />
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
                  let { name, active } = item;
                  return (
                    <RoundedButton
                      key={index}
                      isActive={active}
                      text={name}
                      onPress={isActive =>
                        _changeSubFilter(section.name, name, isActive)
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
  let { filters } = FilterReducer;
  return { subCategories: filters[CATEGORIES.name] };
};

const mapDispatchToProps = (dispatch, props) => ({
  _changeSubFilter: (parentName, childName, isActive) =>
    dispatch(changeSubFilter(parentName, childName, isActive))
});

export default connect(mapStateToProps, mapDispatchToProps)(FundCategory);
