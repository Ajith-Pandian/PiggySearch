import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import { connect } from "react-redux";
import Button from "../Components/Button";
import { PRIMARY } from "../Constants";
import { firstToUpper } from "../Utils";
const textStyle = { color: "white", marginVertical: 5 };
const SortModal = ({ isVisible, onRequestClose }) => {
  return (
    <Modal
      visible={isVisible}
      animationType={"fade"}
      onRequestClose={() => onRequestClose()}
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={() => onRequestClose()}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          <View
            style={{
              backgroundColor: PRIMARY,
              paddingVertical: 20,
              paddingHorizontal: 20
            }}
          >
            <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
              Sort By
            </Text>
            <Text style={textStyle}>1yr return</Text>
            <Text style={textStyle}>3yr Avg return</Text>
            <Text style={textStyle}>Return Since Beginning</Text>
            <Text style={textStyle}>Highest AUM</Text>
            <Text style={textStyle}>Most consistent Returns</Text>
            <Text style={textStyle}>Highest Return per Risk</Text>
            <Text style={textStyle}>Expense ratio</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
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
          <FlatList
            data={result}
            renderItem={({ item }) => {
              let { name, category, minimum_investment: min } = item;
              return (
                <View
                  style={{
                    width: "100%",
                    margin: 10,
                    padding: 10,
                    backgroundColor: PRIMARY,
                    margin: 1
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 16, marginBottom: 10 }}
                  >
                    {name}
                  </Text>
                  <Text style={{ color: "white" }}>{`${firstToUpper(
                    category
                  )} | Min Inv: ₹ ${min}`}</Text>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
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
