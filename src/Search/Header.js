import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { PRIMARY } from "../Constants";
import {
  fetchResult,
  changeSearchTerm,
  changeResultsVisibility
} from "../Store/Actions/FillerActions";
const Header = ({
  onChangeText,
  searchTerm,
  isResultsVisible,
  _fetchResult,
  _changeSearchTerm,
  _changeResultsVisibility
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
          onPress={() => _changeResultsVisibility(false)}
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
        placeholder={"Search"}
        returnKeyType={"search"}
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
    dispatch(changeResultsVisibility(isVisible))
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
