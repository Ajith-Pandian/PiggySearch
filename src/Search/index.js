import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import MinAmtChooser from "../Components/MinAmtChooser";
import RoundedButton from "../Components/RoundedButton";
import Category from "./Category";
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
        backgroundColor: "blue"
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
export default class SearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header onChangeText={text => console.log(text)} />
        <View>
          <Text style={{ marginHorizontal: 10, marginVertical: 5 }}>
            Minimum Investment Amount
          </Text>
          <MinAmtChooser />
        </View>
        <Category />
      </View>
    );
  }
}
SearchPage.navigationOptions = { header: null };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
