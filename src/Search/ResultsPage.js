import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { connect } from "react-redux";

import { Text, Button } from "../Components";

import SortModal from "./SortModal";
import ResultsList from "./ResultsList";

class Results extends Component {
  state = { modalVisible: false };

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    let { result, navigation } = this.props;
    let { modalVisible } = this.state;
    return (
      <View style={{ marginTop: 20, flex: 1 }}>
        {modalVisible ? (
          <SortModal
            visible={modalVisible}
            onRequestClose={() => this.closeModal()}
          />
        ) : null}
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Button
            text={"FILTERS"}
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("Filter")}
          />
          <Button
            text={"SORT"}
            style={{ flex: 1 }}
            onPress={() => this.openModal()}
          />
        </View>
        {result && result.length > 0 ? (
          <ResultsList result={result} />
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "white" }}>No Results</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ FilterReducer }) => {
  let { result } = FilterReducer;
  return { result };
};

const mapDispatchToProps = (dispatch, props) => ({
  _changeFilter: filters => dispatch(changeFilter(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
