import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
    return (
        <Container>
            <Row>
                {pokemons.map(pokemon => (
                    <Col key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                        <PokemonCard pokemon={pokemon} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PokemonList;
 