import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";

const Results = ({ result }) => {
  return (
    <View style={{ marginTop: 20 }}>
      {result && result.length > 0 ? (
        <FlatList
          data={result}
          renderItem={({ item }) => (
            <View style={{ width: "100%", margin: 10 }}>
              <Text style={{ color: "white" }}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>No Results</Text>
      )}
    </View>
  );
};
const mapStateToProps = ({ FilterReducer }) => {
  let { result } = FilterReducer;
  return { result };
};
const mapDispatchToProps = (dispatch, props) => ({
  _changeFilter: filters => dispatch(changeFilter(filters))
});
export default connect(mapStateToProps, mapDispatchToProps)(Results);
