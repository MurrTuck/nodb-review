import React, { Component } from 'react'

class Pokemon extends Component {
    constructor() {
        super()
        this.state = {
            isEditing: false,
            userInput: '',
        }
    }

    toggleEdit() { }
    handleChange(e) { }
    handleSaveName() { }

    render() {
        return (
            <div>
                <img src={this.props.data.image} alt={this.props.data.name} />
                <p>{this.props.data.name}</p>
            </div>
        )
    }
}

export default Pokemon
