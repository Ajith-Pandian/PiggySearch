import React, { Component } from "react";
import Check from "react-native-check-box";

import { PRIMARY } from "../Constants";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.checked };
  }
  render() {
    let { text, style, onChange, disabled = false } = this.props;
    let { checked } = this.state;
    return (
      <Check
        style={[
          {
            padding: 10,
            height: 40,
            backgroundColor: PRIMARY
          },
          style
        ]}
        leftTextStyle={{ color: "white" }}
        checkBoxColor={"white"}
        disabled={disabled}
        onClick={checked =>
          this.setState(
            prevState => ({ checked: !prevState.checked }),
            () => onChange(this.state.checked)
          )
        }
        isChecked={checked}
        leftText={text}
      />
    );
  }
}

export default CheckBox;
