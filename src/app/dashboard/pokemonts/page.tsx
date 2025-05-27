import { PokemonsGrid, ResponsePokemon, SimplePokemon } from "@/pokemons";

const getPokemons = async (limint = 60, offset=0): Promise<SimplePokemon[]> => {
    const data: ResponsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limint}&offset=${offset}`)
    .then(response => response.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name:pokemon.name
    }));
    return pokemons;
}

export default async function NamePage() {
    const pokemons = await getPokemons();
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-center">
                <span className="text-5xl">Listado de pokemons <small>estático</small></span> 
            </div>
            <PokemonsGrid pokemons={pokemons} />
        </div>
    );
}