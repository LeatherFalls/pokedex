import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getPokemon } from "../../services/api";
import { BaseStatsContainer, DetailsImageContainer, DetailsInfoContainer, PokemonSW } from "./styles";
import { types } from "../../utils/pokemonTypes";
import { ThemeGlobalContext } from "../../context/ThemeGlobalContext";

const PokemonDetails: React.FC = () => {
  const { setSearchPokemon } = useContext(ThemeGlobalContext)

  const [pokemonDetails, setPokemonDetails] = useState<any>({});

  const path = useLocation();
  const pokemonName = path.pathname.split("/")[2];

  const getPokemonDetails = async () => {
    const pokemon = await getPokemon(pokemonName);
    console.log(pokemon);
    setPokemonDetails(pokemon);
  }

  const setCardBackgroundColor = () => {
    const pokemonType  = pokemonDetails.types.map((type: any) => type.type.name);
    const pokemonColor = types.find((item: any) => item[pokemonType[0]])?.[pokemonType[0]];
    return pokemonColor;
  }

  useEffect(() => {
    getPokemonDetails();
  }, []);

  return (
    <div>
      {
        'sprites' in pokemonDetails ? (
          <div>
            <DetailsImageContainer
              style={{
                backgroundColor: setCardBackgroundColor(),
              }}
            >
              <div>
                <Link
                  to='/'
                  onClick={() => setSearchPokemon("")}
                >
                  Pokedex
                </Link>
                <p>#{pokemonDetails.id}</p>
              </div>
              <img
                src={pokemonDetails.sprites.other.dream_world.front_default}
                alt={pokemonDetails.name}
                className='test'
              />
            </DetailsImageContainer>
            <DetailsInfoContainer>
              <h1>{pokemonDetails.name.toUpperCase()}</h1>
              <div className="pokemon_types">
                {
                  pokemonDetails.types.map((type: any) => (
                    <p
                      key={type.type.name}
                      style={{
                        backgroundColor: types.find((item: any) => item[type.type.name])?.[type.type.name],
                      }}
                    >
                      {type.type.name}
                    </p>
                  ))
                }
              </div>
              <div className="pokemon_stats">
                <PokemonSW>
                  <div>
                    <span>Weight:</span>
                    <span>{pokemonDetails.weight}kg</span>
                  </div>
                  <div>
                    <span>Height:</span>
                    <span>{pokemonDetails.height}m</span>
                  </div>
                </PokemonSW>
                <BaseStatsContainer>
                  <h1>Base stats</h1>
                  {
                    pokemonDetails.stats.map((stat: any) => (
                      <li key={stat.stat.name}>
                        <h3>{stat.stat.name.toUpperCase()}</h3>
                        <span className="bar">
                          <span
                            className={stat.stat.name}
                            style={{
                              width: `${stat.base_stat / 3}%`
                            }}
                          ></span>
                        </span>
                      </li>
                    ))
                  }
                </BaseStatsContainer>
              </div>
            </DetailsInfoContainer>
          </div>
        ) : <h1>Loading...</h1>
      }
    </div>
  )
}

export default PokemonDetails;