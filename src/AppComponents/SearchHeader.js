import React, { Component } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Text } from "../Components";
import { PRIMARY } from "../Constants";
import {
  fetchResult,
  changeSearchTerm,
  changeResultsVisibility,
  resetFilters
} from "../Store/Actions/FillerActions";

const Header = ({
  onChangeText,
  searchTerm,
  isResultsVisible,
  _fetchResult,
  _changeSearchTerm,
  _changeResultsVisibility,
  _resetFilters
}) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: 60,
        backgroundColor: PRIMARY,
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      {isResultsVisible ? (
        <TouchableOpacity
          onPress={() => {
            _resetFilters();
            _changeResultsVisibility(false);
          }}
          style={{
            marginLeft: 20,
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "white" }}>BACK</Text>
        </TouchableOpacity>
      ) : null}
      <TextInput
        style={{
          flex: 1,
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 6,
          backgroundColor: "white",
          marginHorizontal: 20,
          marginVertical: 10,
          paddingHorizontal: 10
        }}
        onChangeText={text => _changeSearchTerm(text)}
        value={searchTerm}
        placeholder={"Search"}
        returnKeyType={"search"}
        underlineColorAndroid={"transparent"}
        onSubmitEditing={() => _fetchResult(searchTerm)}
      />
    </View>
  );
};

const mapStateToProps = ({ FilterReducer }) => {
  let { searchTerm, isResultsVisible } = FilterReducer;
  return { searchTerm, isResultsVisible };
};
const mapDispatchToProps = (dispatch, props) => ({
  _fetchResult: searchTerm => dispatch(fetchResult(searchTerm)),
  _changeSearchTerm: text => dispatch(changeSearchTerm(text)),
  _changeResultsVisibility: isVisible =>
    dispatch(changeResultsVisibility(isVisible)),
  _resetFilters: () => dispatch(resetFilters())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
