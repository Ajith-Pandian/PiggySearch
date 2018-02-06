import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Slider from "react-native-slider";

import Text from "./Text";

import { PINK, PINK_DARK } from "../Constants";

const MIN = 0,
  MAX = 100;

const getStepValue = (startStep, steps) => {
  let stepValue = (MAX - MIN) / (steps - 1);
  let value = startStep * stepValue || 0;
  return value;
};

export default class StepSlider extends Component {
  constructor(props) {
    super(props);
    let { startStep, steps } = props;
    let value = getStepValue(startStep, steps);
    this.state = { value };
  }
  componentWillReceiveProps(nextProps) {
    let { startStep, steps } = nextProps;
    let value = getStepValue(startStep, steps);
    this.setState(prevState => ({
      value
    }));
  }
  calculateStep = () => {
    let { value: slideValue } = this.state;
    let { onSelect, steps } = this.props;
    steps = steps - 1;
    const val = (MAX - MIN) / steps;
    const mod = Math.floor(slideValue / val);

    mod < steps
      ? this.slideTo(slideValue, val * mod, val * (mod + 1), mod)
      : null;
  };
  setValue = (value, mod) => {
    let { onSelect } = this.props;
    this.setState({ value });
    onSelect(mod);
  };

  slideTo = (val, min, max, mod) => {
    const half = (min + max) / 2;
    val > min && val < half
      ? this.setValue(min, mod)
      : this.setValue(max, mod + 1);
  };
  render() {
    let { value } = this.state;
    return (
      <View style={styles.MainContainer}>
        <Slider
          value={value}
          minimumValue={MIN}
          maximumValue={MAX}
          minimumTrackTintColor={"white"}
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
    marginVertical: 20,
    marginHorizontal: 25
  }
});
