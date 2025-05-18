import Image from 'next/image'
import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonsGrid = ({pokemons}:Props) => {
    return (
        <div className="flex flex-wrap gap-3 items-center justify-center">
            {pokemons.map(pokemon => (
                <Image
                    width={100}
                    height={100}
                    key={pokemon.id}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    alt="Pokemon"

                />
            ))}
        </div>
    )
}
