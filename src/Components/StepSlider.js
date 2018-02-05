import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const MAX = 90;
const MIN = 0;
const DIV = 3;
import { PINK, PINK_DARK } from "../Constants";
import Slider from "react-native-slider";
export default class StepSlider extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };
  }
  calculateStep = () => {
    let { value: slideValue } = this.state;
    const val = (MAX - MIN) / DIV;
    const mod = Math.floor(slideValue / val);
    mod < DIV ? this.swipeTo(slideValue, val * mod, val * (mod + 1)) : null;
  };
  slideTo = value => {
    this.setState({ value });
  };

  swipeTo = (val, min, max) => {
    const half = (min + max) / 2;
    val > min && val < half ? this.slideTo(min) : this.slideTo(max);
  };
  render() {
    let { value } = this.state;
    return (
      <View style={styles.MainContainer}>
        <Slider
          value={value}
          minimumValue={MIN}
          maximumValue={MAX}
          minimumTrackTintColor={PINK}
          maximumTrackTintColor={PINK_DARK}
          thumbTintColor={PINK}
          style={{ width: "100%" }}
          thumbTintColor={PINK}
          onValueChange={value => this.setState({ value })}
          onSlidingComplete={() => this.calculateStep(value)}
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
