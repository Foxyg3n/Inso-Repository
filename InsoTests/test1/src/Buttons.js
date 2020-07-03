import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {
  state = {
    title: 'Choose button'
  }

  render() { 
    const changeTitle = (color) => {
      this.setState({title:color})
    }

    return(
      <div className="buttons">
        <h1 className="title">{this.state.title}</h1>
        <button className="button" onClick={() => changeTitle("red")}>red</button>
        <button className="button" onClick={() => changeTitle("green")}>green</button>
        <button className="button" onClick={() => changeTitle("blue")}>blue</button>
      </div>
    )
  }
}

export default Buttons;