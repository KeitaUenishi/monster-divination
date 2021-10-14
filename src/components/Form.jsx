
import React, {Component} from "react";

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      editing: true,
      inputCount: 0,
    }
    this.handleEditing = this.handleEditing.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  render() {
    const { editing } = this.state
    return (
      <div>
        <h1>
          モンスター占い
        </h1>
        <form>
          {editing ? (
            <div>
              <input onChange={(e) => {
                this.setState({ input: e.target.value })
              }}
              type="text"
              value={this.state.input}
              />
              <button onClick={this.handleSubmit}>占う</button>
            </div>
          ) : (
            <div>
              <span>{this.state.input} さん </span>
              <span>{this.state.inputCount} 文字</span>
              <button onClick={this.handleEditing}>edit</button>
            </div>
          )}
        </form>
      </div>
    )
  }

  handleEditing(e) {
    e.preventDefault()
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.input) return
    this.setState({
      input: this.state.input,
      editing: !this.state.editing,
    })
    
    let key = 'input';
    let inputItem = this.state[key];
    let inputItemCount = inputItem.toString().length;

    this.setState({
      inputCount: inputItemCount
    })
  }
}