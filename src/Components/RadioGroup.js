import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Radio = props => {
  return (
    <View
      style={[
        {
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: "white",
          alignItems: "center",
          justifyContent: "center"
        },
        props.style
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: "white"
          }}
        />
      ) : null}
    </View>
  );
};

class RadioButton extends Component {
  constructor(props) {
    super(props);
    let { isActive = false } = props;
    this.state = { isActive };
  }
  componentWillReceiveProps(nextProps) {
    let { isActive } = nextProps;
    this.setState({ isActive });
  }
  render() {
    let { isActive } = this.state;
    let { onChange, text, style } = this.props;
    return (
      <TouchableOpacity
        style={[
          { flexDirection: "row", padding: 5, alignItems: "center" },
          style
        ]}
        onPress={() =>
          this.setState(
            prevState => ({ isActive: !prevState.isActive }),
            () => onChange(this.state.isActive)
          )
        }
      >
        <Radio selected={isActive} />
        <Text style={{ color: "white", marginHorizontal: 5 }}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
class RadioGroup extends Component {
  constructor(props) {
    super(props);
    let { values } = props;
    values = values.map(item => ({ ...item, isActive: false }));
    this.state = { initialValues: values, values };
  }
  handleRadioChange = (index, isActive) => {
    let { initialValues } = this.state;
    let values = initialValues.map((item, i) => ({
      ...item,
      isActive: i === index
    }));
    this.setState({ values });
  };
  render() {
    let { style, buttonStyle } = this.props;
    let { values } = this.state;
    return (
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          },
          style
        ]}
      >
        {values.map((item, index) => (
          <RadioButton
            key={index}
            text={item.name}
            isActive={item.isActive}
            style={buttonStyle}
            onChange={isActive => {
              this.handleRadioChange(index, isActive);
            }}
          />
        ))}
      </View>
    );
  }
}
export default RadioGroup;
