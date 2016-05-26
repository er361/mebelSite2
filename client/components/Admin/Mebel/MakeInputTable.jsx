import React from 'react';

const ESC_KEY_CODE = 27;
const ENTER_KEY_CODE = 13;

export default class MakeInputTable extends React.Component {
  state = {
    text: this.props.data
  }
  componentDidMount() {
    this.refs.textInput.focus();
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  handleBlur = () => {
    this.props.onCancel();
  }
  handleKeyDown = (e) => {
    if(this.props.onCancel && e.keyCode == ESC_KEY_CODE)
      this.props.onCancel();
      else if (this.props.onSave && e.keyCode == ENTER_KEY_CODE) {
          // TODO: save()
      }
  }
  render() {
    return (
      <div className="ui input">
        <input
          ref='textInput'
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}/>
        <button className="ui button">Edit</button>
      </div>
    );
  }
}
