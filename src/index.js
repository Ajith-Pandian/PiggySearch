import React, { Component } from "react";
import { StyleSheet, Platform, StatusBar, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider, connect } from "react-redux";

import Search from "./Search";
import Filter from "./Filter";
import { PRIMARY_DARK } from "./Constants";

import store from "./Store";

const StackApp = StackNavigator({
  Search: { screen: Search },
  Filter: { screen: Filter }
});

//Status bar with bg color for IOS/Android
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={{
      height: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
      backgroundColor
    }}
  >
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const StatusBarApp = () => (
  <View style={{ flex: 1 }}>
    <MyStatusBar backgroundColor={PRIMARY_DARK} barStyle="light-content" />
    <StackApp />
  </View>
);

const ReduxApp = () => (
  <Provider store={store}>
    <StatusBarApp />
  </Provider>
);

export default ReduxApp;
