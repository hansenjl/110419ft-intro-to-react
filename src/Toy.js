import React, {Component} from 'react'

class Toy extends Component {




    render() {

        return(
            <div className="card" >
                <h2>{this.props.name}</h2>
                <img src={this.props.image} className="toy-avatar" alt="Toy"/>
                <p>{this.props.likes} Likes </p>
                <button id={"toy-" + this.props.id} className="like-btn" onClick={this.props.updateLikes}>Like &lt;3</button>
            </div>
        )
    }
}

export default Toy