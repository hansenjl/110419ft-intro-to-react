import React, {Component} from 'react'
import Toy from './Toy'


class ToysContainer extends Component {


  render() {
    return(
      <div id="toy-container">
        {this.props.toys.map( t=> ( <Toy name={t.name} image={t.image} likes={t.likes} id={t.id} updateLikes={this.props.updateLikes} /> ))}
      </div>
    )
  }
}

export default ToysContainer
