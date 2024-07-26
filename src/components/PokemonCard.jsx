import React from 'react';
import { Card } from 'react-bootstrap';

const PokemonCard = ({ pokemon }) => {
    
    const capitalizeName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return (
        <Card style={{ width: '18rem' }} className="mb-4 pokemon-card">
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
            <Card.Body>
                <Card.Title>{capitalizeName(pokemon.name)}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default PokemonCard;
 