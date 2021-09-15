import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Hello React",
      disabled: false,
      styleObject: {
        color: "black",
        backgroundColor: "white",
        borderRadius: "50%",
        opacity: "1.0",
        fontSize: "40px",
      },
    };
  }

  handleChangeStyle(event, type) {
    const valueInput = event.target.value;
    const styleObject = this.state.styleObject;
    const color = styleObject.color;
    const backgroundColor = styleObject.backgroundColor;
    const borderRadius = styleObject.borderRadius;
    const opacity = styleObject.opacity;
    const fontSize = styleObject.fontSize;

    switch (type) {
      case "color":
        this.setState({
          styleObject: {
            color: valueInput,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            opacity: opacity,
            fontSize: fontSize,
          },
        });
        break;
      case "backgroundColor":
        this.setState({
          styleObject: {
            color: color,
            backgroundColor: valueInput,
            borderRadius: borderRadius,
            opacity: opacity,
            fontSize: fontSize,
          },
        });
        break;
      case "borderRadius":
        this.setState({
          styleObject: {
            color: color,
            backgroundColor: backgroundColor,
            borderRadius: valueInput + "%",
            opacity: opacity,
            fontSize: fontSize,
          },
        });
        break;
      case "opacity":
        this.setState({
          styleObject: {
            color: color,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            opacity: valueInput,
            fontSize: fontSize,
          },
        });
        break;
      case "fontSize":
        this.setState({
          styleObject: {
            color: color,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            opacity: opacity,
            fontSize: valueInput + "px",
          },
        });
        break;
      default:
        console.log("Invalid type.");
    }
  }

  handleChangeDisabled() {
    const disabled = !this.state.disabled;
    this.setState({ disabled: disabled });
  }

  handleChangeText(event) {
    this.setState({ buttonText: event.target.value });
  }

  render() {
    const styleObject = this.state.styleObject;
    return (
      <div>
        <input style={this.state.styleObject} type="button" value={this.state.buttonText} disabled={this.state.disabled} />
        <Color onChange={(event) => this.handleChangeStyle(event, "color")} />
        <BackgroundColor onChange={(event) => this.handleChangeStyle(event, "backgroundColor")} />
        <Opacity value={styleObject.opacity} onChange={(event) => this.handleChangeStyle(event, "opacity")} />
        <BorderRadius value={styleObject.borderRadius} onChange={(event) => this.handleChangeStyle(event, "borderRadius")} />
        <FontSize value={styleObject.fontSize} onChange={(event) => this.handleChangeStyle(event, "fontSize")} />
        <Disabled onChange={() => this.handleChangeDisabled()} />
        <ButtonText value={this.state.buttonText} onChange={(event) => this.handleChangeText(event)} />
      </div>
    );
  }
}

function Color(props) {
  return (
    <div>
      <label>color</label>
      <input type="color" onChange={props.onChange} />
    </div>
  );
}

function BackgroundColor(props) {
  return (
    <div>
      <label>background color</label>
      <input type="color" onChange={props.onChange} />
    </div>
  );
}

function Opacity(props) {
  return (
    <div>
      <label>opacity</label>
      <input type="range" onChange={props.onChange} min="0" max="1" step="0.01" />
      {props.value}
    </div>
  );
}
function BorderRadius(props) {
  return (
    <div>
      <label>borderRadius</label>
      <input type="range" onChange={props.onChange} min="0" max="100" step="1" />
      {props.value}
    </div>
  );
}
function FontSize(props) {
  return (
    <div>
      <label>fontSize</label>
      <input type="range" onChange={props.onChange} min="10" max="80" step="1" />
      {props.value}
    </div>
  );
}

function Disabled(props) {
  return (
    <div>
      <label>disabled</label>
      <input type="checkbox" onChange={props.onChange} />
    </div>
  );
}

function ButtonText(props) {
  return (
    <div>
      <label>button text</label>
      <input value={props.value} onChange={props.onChange} />
    </div>
  );
}

ReactDOM.render(<Button />, document.getElementById("root"));
