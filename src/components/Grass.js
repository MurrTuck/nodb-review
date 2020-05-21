import React, { Component } from 'react'

class Grass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grassClicked: false,
        }
    }

    checkGrass() { }

    render() {
        return (
            <div>
                <img src={this.props.data.sprites.front_default}
                    alt={this.props.data.name}
                />
                <p>{this.props.data.name}</p>
            </div>
        )
    }
}

export default Grass
