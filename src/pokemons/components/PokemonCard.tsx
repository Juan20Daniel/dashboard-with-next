import Image from 'next/image';
import Link from 'next/link';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}:Props) => {
  const { id, name } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
          <Image
            width={100}
            height={100}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt='Imagen de pokemon'
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link href={`/dashboard/pokemonts/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Mas información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href='/dashboard/pokemonts' className="px-4 py-2 hover:bg-gray-100 flex">
            <div className="text-red-600 flex flex-col justify-center">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
