import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      txt: 'this is the state txt',
      currentEvent: '---',
    }
  }

  update = (e) => {
    this.setState({txt: e.target.value})
  }

  clickHandle = (e) => {
    this.setState({txt: Title.defaultProps.text})
  }

  textareaUpdate = (e) => {
    this.setState({currentEvent: e.type})
  }

  render() {
    return (
      <div>
        <Widget update={this.update} />
        <Title text={this.state.txt} />
        <Button clickHandle={this.clickHandle} ><Default /> title</Button>
        <div>
          <textarea
            onKeyPress={this.textareaUpdate}
            onCopy={this.textareaUpdate}
            onCut={this.textareaUpdate}
            onPaste={this.textareaUpdate}
            onFocus={this.textareaUpdate}
            onBlur={this.textareaUpdate}
            mouseOver={this.textareaUpdate}
            mouseDown={this.textareaUpdate}
            mouseUp={this.textareaUpdate}
            onDoubleClick={this.textareaUpdate}
            onTouchStart={this.update}
            onTouchMove={this.update}
            onTouchEnd={this.update}
            cols="30" 
            rows="10"/>
          <h1>{this.state.currentEvent}</h1>
        </div>
      </div>
    );
  }
}

const Widget = (props) =>{
  return <input type="text" onChange={props.update}/>
  }

const Button = (props) => {
  return <button onClick={props.clickHandle} >{props.children}</button>
}

const Default = (props) => <span>default</span>

const Title = (props) => <h1>Title: {props.text}</h1>

App.propTypes = {
  txt: PropTypes.string.isRequired,
}

App.defaultProps = {
  txt: "this is default prop"
}

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    } 
  } 
}

Title.defaultProps = {
  text: "Default Title"
}

export default App;
