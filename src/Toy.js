import React, {Component} from 'react'

class Toy extends Component {
   state = {
       name: this.props.name,
       image: this.props.image,
       likes: this.props.likes
   }

   addLike = (e) => {
     this.setState({
        likes: this.state.likes + 1
     })

   }


    render() {
        return(
            <div className="card">
                <h2>{this.state.name}</h2>
                <img src={this.state.image} className="toy-avatar" alt="Toy"/>
                <p>{this.state.likes} Likes </p>
                <button className="like-btn" onClick={this.addLike}>Like &lt;3</button>
            </div>
        )
    }
}

export default Toy