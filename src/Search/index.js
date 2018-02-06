import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from "react-native";
import { connect } from "react-redux";

import { Button } from "../Components";
import { SearchHeader } from "../AppComponents";

import PrimaryFilter from "./PrimaryFilter";
import Results from "./ResultsPage";

import { PRIMARY, PINK, BG_COLOR } from "../Constants";
import { changeFilter, fetchResult } from "../Store/Actions/FillerActions";

const { height: DEVICE_HEIGHT } = Dimensions.get("window");

class SearchPage extends Component {
  render() {
    let {
      navigation,
      isResultsVisible,
      _changeFilter,
      _fetchResult
    } = this.props;
    return (
      <View style={styles.container}>
        {isResultsVisible ? (
          <Results navigation={navigation} />
        ) : (
          <PrimaryFilter
            onSearchPress={() => {
              _fetchResult();
            }}
          />
        )}
      </View>
    );
  }
}

SearchPage.navigationOptions = {
  header: <SearchHeader onChangeText={text => console.log(text)} />
};

const mapStateToProps = ({ FilterReducer }) => {
  let { filter, isResultsVisible } = FilterReducer;
  return { filter, isResultsVisible };
};

const mapDispatchToProps = (dispatch, props) => ({
  _changeFilter: filters => dispatch(changeFilter(filters)),
  _fetchResult: filters => dispatch(fetchResult())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height: DEVICE_HEIGHT - (StatusBar.currentHeight + 40),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BG_COLOR
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
