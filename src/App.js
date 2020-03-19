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
    //fetch request
    this.setState({
      toys: toyData
    })
  }

  updateLikes = (e) => {
     let id = parseInt(e.target.id.split('-')[1])

     this.setState(prevState => {
       let toy = prevState.toys.find(toy => toy.id === id)
       let newToys = prevState.toys.filter(toy => toy.id !== id)
       let newToy = {...toy, likes: toy.likes + 1}
      return {
        toys: [...newToys, newToy]
      }
     })
    }

  handleInputChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    //updateState
    this.setState( {
        [name]: value
    })
  }

  addToy = (e) => {
    //POST request to a backend with your data
    // update state
    let newToy = {name: this.state.name, image: this.state.image, likes: 0, id: this.state.toys.length + 1}
    this.setState(prevState => {
      return {
        toys: [...prevState.toys, newToy],
        name: "",
        image: ""
      }
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
              <input onChange={this.handleInputChange} name="name"  id='toy-name' value={this.state.name} />
            </p>
            <p>
              <label>Image url:</label>
              <input onChange={this.handleInputChange} name="image" id='toy-image' value={this.state.image}  />
            </p>
            <br />
            <button onClick={this.addToy}>Add Toy!</button>
        </div>
        <ToysContainer toys={this.state.toys} updateLikes={this.updateLikes}/>
      </div>
    );
  }
}

export default App;

//A component is a collection of elements that represent a unity in a goal or task
//As we nest our components, their specifity increased
