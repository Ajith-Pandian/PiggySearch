import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import MinAmtChooser from "../Components/MinAmtChooser";
import RoundedButton from "../Components/RoundedButton";
import Category from "./Category";

import { PRIMARY, PINK, BG_COLOR } from "../Constants";
import { changeFilter } from "../Store/Actions/FillerActions";

const Header = onChangeText => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: 60,
        backgroundColor: PRIMARY
      }}
    >
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 6,
          backgroundColor: "white",
          marginHorizontal: 20,
          marginVertical: 10,
          paddingHorizontal: 10
        }}
        onChangeText={text => onChangeText(text)}
        placeholder={"Search"}
      />
    </View>
  );
};

const Button = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        {
          backgroundColor: PINK,
          margin: 2,
          width: "98%",
          alignItems: "center",
          paddingVertical: 10
        },
        style
      ]}
    >
      <Text style={{ color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
};
class SearchPage extends Component {
  render() {
    let { navigation, _changeFilter } = this.props;
    return (
      <View style={styles.container}>
        <Header onChangeText={text => console.log(text)} />
        <View>
          <Text
            style={{ color: "white", marginHorizontal: 10, marginVertical: 5 }}
          >
            Minimum Investment Amount
          </Text>
          <MinAmtChooser />
        </View>
        <Category />
        <Button
          text={"SEARCH"}
          style={{ position: "absolute", bottom: 0 }}
          onPress={() => {
            navigation.navigate("Filter");
            _changeFilter();
          }}
        />
      </View>
    );
  }
}
SearchPage.navigationOptions = { header: null };

const mapStateToProps = ({ FilterReducer }) => {
  let { filter } = FilterReducer;
  return { filter };
};
const mapDispatchToProps = (dispatch, props) => ({
  _changeFilter: filters => dispatch(changeFilter(filters))
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
