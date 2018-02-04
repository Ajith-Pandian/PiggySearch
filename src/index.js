import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import Search from "./Search";
import Filter from "./Filter";

const StackApp = StackNavigator({
  Search: { screen: Search },
  Filter: { screen: Filter }
});

export default StackApp;
