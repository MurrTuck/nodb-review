import React, { Component } from 'react'
import Grass from './Grass'
import axios from 'axios'

class Finder extends Component {
    constructor() {
        super()
        this.state = {
            wildPokemon: [],
        }
    }

    componentDidMount() {
        axios.get('/api/wild-pokemon').then((res) => {
            this.setState({
                wildPokemon: res.data,
            })
        })
    }

    render() {
        const pokemonMap = this.state.wildPokemon.map((pokemon) => (
            <Grass
                key={pokemon.id}
                catchPokemon={this.props.catchPokemon}
                data={pokemon}
            />
        ))

        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {pokemonMap}
            </div>
        )
    }
}

export default Finder
