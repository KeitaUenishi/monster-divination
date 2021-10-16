
import React, {Component} from "react";

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      editing: true,
      inputCount: 0,
      ImageFile: "",
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
              <input placeholder="名前を入力" onChange={(e) => {
                this.setState({ input: e.target.value })
              }}
              type="text"
              value={this.state.input}
              />
              <button onClick={this.handleSubmit}>占う</button>
            </div>
          ) : (
            <div>
              <div>
                <span style={{"marginRight": "10px"}}>{this.state.input} さん の運勢は</span>
              </div>
              <br />
              <div>
                <img style={{"width":"300px"}} src={`${process.env.PUBLIC_URL}/${this.state.ImageFile}.jpg`} alt="test" />
              </div>
              <button style={{"marginTop": "20px"}} onClick={this.handleEditing}>戻る</button>
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
      inputCount: inputItemCount,
      ImageFile: DisplayImage(inputItemCount)
    })
  }
}

function DisplayImage (count){
  if(count > 10){
    return "ojisan"
  }
  else if (count > 5){
    return "uekibachi"
  }
  else {
    return "hekoki"
  }
}