import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { pokemon } from './pokemon';
import SearchBox from './SearchBox';
import './App.css';
import logo from './logo.jpg';
import Scroll from './Scroll';




class App extends Component {
	constructor() {
		super()
		this.state = {
			pokemon: pokemon,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	render() {
		const filteredPokemon = this.state.pokemon.filter(pokemon => {
			return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
		<div className='tc'>
			<img id='logo' src={logo} alt='pokemon' height={325} width={325} />
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<Cardlist pokemon={filteredPokemon} />
			</Scroll>	
		</div>
	);
	}
}

export default App;