import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from "react-native";
import { connect } from "react-redux";

import Header from "./Header";
import AmountChooser from "../Components/AmountChooser";
import RoundedButton from "../Components/RoundedButton";
import Button from "../Components/Button";
import Category from "./Category";
import Results from "./ResultsPage";

import { PRIMARY, PINK, BG_COLOR } from "../Constants";
import { changeFilter } from "../Store/Actions/FillerActions";

const { height: DEVICE_HEIGHT } = Dimensions.get("window");

const PrimaryFilter = ({ onSearchPress }) => {
  return (
    <View>
      <View style={{ flex: 1, justifyContent: "center", marginVertical: 60 }}>
        <View>
          <Text
            style={{
              color: "white",
              marginHorizontal: 10,
              marginVertical: 5
            }}
          >
            Minimum Investment Amount
          </Text>
          <AmountChooser />
        </View>
        <Category />
      </View>
      <Button
        text={"SEARCH"}
        style={{
          position: "absolute",
          bottom: 0,
          width: "98%"
        }}
        onPress={() => onSearchPress()}
      />
    </View>
  );
};
class SearchPage extends Component {
  render() {
    let { navigation, isResultsVisible, _changeFilter } = this.props;
    return (
      <View style={styles.container}>
        {isResultsVisible ? (
          <Results />
        ) : (
          <PrimaryFilter
            onSearchPress={() => {
              navigation.navigate("Filter");
              _changeFilter();
            }}
          />
        )}
      </View>
    );
  }
}
SearchPage.navigationOptions = {
  header: <Header onChangeText={text => console.log(text)} />
};

const mapStateToProps = ({ FilterReducer }) => {
  let { filter, isResultsVisible } = FilterReducer;
  return { filter, isResultsVisible };
};
const mapDispatchToProps = (dispatch, props) => ({
  _changeFilter: filters => dispatch(changeFilter(filters))
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
