import React, { useState, useEffect } from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';
import PokemonList from './components/PokemonList';
import './App.css';

const App = () => {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => {
                const fetches = data.results.map(result => fetch(result.url).then(res => res.json()));
                Promise.all(fetches).then(pokemonData => {
                    const formattedPokemons = pokemonData.map(pokemon => ({
                        id: pokemon.id,
                        name: pokemon.name,
                    }));
                    setPokemons(formattedPokemons);
                    setFilteredPokemons(formattedPokemons);
                });
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value === '') {
            setFilteredPokemons(pokemons);
        } else {
            setFilteredPokemons(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())));
        }
    };

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Pokémon Search</h1>
            <Form className="mb-4">
                <FormControl
                    type="text"
                    placeholder="Search Pokémon"
                    className="mr-sm-2"
                    value={search}
                    onChange={handleSearchChange}
                />
            </Form>
            <PokemonList pokemons={filteredPokemons} />
        </Container>
    );
};

export default App;
 