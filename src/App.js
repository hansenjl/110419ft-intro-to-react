import React, {Component} from 'react';
import './App.css';
import ToysContainer from './ToysContainer'
import {toyData} from './data'

class App extends Component {

  state = {
    toys: [],
    name: "",
    image: ""
  }

  componentDidMount(){
    this.setState({
      toys: toyData
    })
  }

  addToy = (e) => {
     //update state to include new toy
     let newToy = {name: this.state.name, image: this.state.image, likes: 0}
     this.setState({
       toys: [...this.state.toys, newToy],
       name: '',
       image: ''
     })
  }

  handleChange = (e) => {
    //update state to reflect what we typed in the fields
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <div id="toy-header">
          <img
            src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
            alt="toy-header"
          />
        </div>
        <div id="new-toy-form">
            <p>
              <label>Name:</label>
              <input onChange={this.handleChange} id='toy-name' name='name' value={this.state.name}/>
            </p>
            <p>
              <label>Image url:</label>
              <input onChange={this.handleChange} id='toy-image' name='image' value={this.state.image}/>
            </p>
            <br />
            <button onClick={this.addToy}>Add Toy!</button>
        </div>
        <ToysContainer toys={this.state.toys}/>
      </div>
    );
  }
}

export default App;

//A component is a collection of elements that represent a unity in a goal or task
//As we nest our components, their specifity increased
