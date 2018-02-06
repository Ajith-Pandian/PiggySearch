import React from "react";
import {
  StyleSheet,
  View,
  Modal,
  TouchableWithoutFeedback
} from "react-native";

import { Text } from "../Components";

import { PRIMARY, SORT_ITEMS } from "../Constants";

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
            {SORT_ITEMS.map((item, index) => (
              <Text key={index} style={{ marginVertical: 5 }}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SortModal;
