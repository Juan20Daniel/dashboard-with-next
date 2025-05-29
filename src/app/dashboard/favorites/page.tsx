import { PokemonsGrid } from "@/pokemons";


export const metadata = {
 title: 'Favoritos',
 description: 'Los pokémones favoritos de los usuarios',
};



export default async function NamePage() {
    
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-center">
                <span className="text-5xl">Pokemons favoritos <small className="text-blue-500">global state</small></span> 
            </div>
            <PokemonsGrid pokemons={[]} />
        </div>
    );
}