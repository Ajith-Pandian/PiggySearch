import React, { Component } from "react";
import { StyleSheet, Text, View, Slider, Dimensions } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const MAX_VALUE = 100;
const MIN_VALUE = 0;
import { PINK, PINK_DARK } from "../Constants";

export default class StepSlider extends Component {
  constructor() {
    super();

    this.state = {
      SliderValue: 0
    };
  }

  render() {
    let { SliderValue } = this.state;
    return (
      <View style={styles.MainContainer}>
        <Slider
          step={1}
          minimumValue={MIN_VALUE}
          maximumValue={MAX_VALUE}
          minimumTrackTintColor={PINK}
          maximumTrackTintColor={PINK}
          thumbTintColor={PINK}
          minimumTrackTintColor="#009688"
          onValueChange={ChangedValue => {
            this.setState({ SliderValue: ChangedValue });
          }}
          style={{
            width: SCREEN_WIDTH - 60
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 10
  }
});
