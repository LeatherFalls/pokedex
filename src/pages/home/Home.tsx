import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { getPokemons, getPokemonImage } from "../../services/api";
import { HomeContainer } from "./styles";

const Home: React.FC = () => {
  const [pagination, setPagination] = useState(0);
  const [pokemons, setPokemons] = useState<any>([]);
  const [pokemonsImg, setPokemonsImages] = useState<any>([]);

  const renderPokemons = async () => {
    const response = await getPokemons(20, pagination);
    setPokemons(response.results);

    const pokemonsIds = response.results.map((pokemon: any) => {
      const pokemonId = pokemon.url.split("/")[6];
      return pokemonId;
    });

    const pokemonsImages = await Promise.all(
      pokemonsIds.map(async (pokemonId: any) => {
        const pokemonImage = await getPokemonImage(pokemonId);
        return pokemonImage.sprites.other.dream_world.front_default;
      })
    );

    setPokemonsImages(pokemonsImages);
    console.log(pokemonsImages);
  };

  useEffect(() => {
    renderPokemons();
  }, [pagination]);

  return (
    <div>
      <Header />
      <HomeContainer>
        {
          pokemons.map((pokemon: any) => {
            return (
              <div key={pokemon.name} className="pokemon_card">
                <img src={pokemonsImg[pokemons.indexOf(pokemon)]} alt={pokemon.name} />
                <h1>{pokemon.name}</h1>
              </div>
            )
          })
        }
        <div>
          <button onClick={() => setPagination(pagination - 20)}>-</button>
          <button onClick={() => setPagination(pagination + 20)}>+</button>
        </div>
      </HomeContainer>
    </div>
  );
}

export default Home;