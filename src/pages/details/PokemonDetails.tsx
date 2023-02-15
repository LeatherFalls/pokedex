import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getPokemon } from "../../services/api";
import { getAverageRGB } from "../../utils/getAverageColor";
import { BaseStatsContainer, DetailsImageContainer, DetailsInfoContainer, PokemonSW } from "./styles";
import SkillBar from 'react-skillbars';
import { keyframes } from "styled-components";

const PokemonDetails: React.FC = () => {
  const [pokemonPathName, setPokemonPathName] = useState<string>('');
  const [pokemonDetails, setPokemonDetails] = useState<any>({});

  const path = useLocation();
  const pokemonName = path.pathname.split("/")[2];

  const getPokemonDetails = async () => {
    const pokemon = await getPokemon(pokemonName);
    console.log(pokemon);
    setPokemonDetails(pokemon);
  }

  const renderSkills =  () => {
    const skills = [
      {type: "HP", level: pokemonDetails.stats[0].base_stat},
      {type: "ATK", level: pokemonDetails.stats[1].base_stat},
      {type: "DEF", level: pokemonDetails.stats[2].base_stat},
      {type: "SAT", level: pokemonDetails.stats[3].base_stat},
      {type: "SDF", level: pokemonDetails.stats[4].base_stat},
      {type: "SPD", level: pokemonDetails.stats[5].base_stat},
    ]

    return (
      <SkillBar
        skills={skills}
        height={"1rem"}
        symbol={""}
      />
    )
  }

  const setAverageColor = () => {
    const img = document.querySelector('.test');
    console.log(img);

    if (img) {
      img.onload = () => {
        const { R, G, B } = getAverageRGB(img, 4);
        img.parentNode.style.background = `rgb(${R}, ${G}, ${B})`
      }
    }
  };

  useEffect(() => {
    setPokemonPathName(pokemonName);
  }, [path]);

  useEffect(() => {
    getPokemonDetails();
  }, []);

  useEffect(() => {
    setAverageColor();
  });

  return (
    <div>
      {
        'sprites' in pokemonDetails ? (
          <div>
            <DetailsImageContainer>
              <div>
                <Link to='/'>Pokedex</Link>
                <p>#{pokemonDetails.id}</p>
              </div>
              <img
                src={pokemonDetails.sprites.other.dream_world.front_default}
                alt={pokemonDetails.name}
                className='test'
              />
            </DetailsImageContainer>
            <DetailsInfoContainer>
              <h1>{pokemonDetails.name}</h1>
              <div className="pokemon_types">
                {
                  pokemonDetails.types.map((type: any) => (
                    <p key={type.type.name}>{type.type.name}</p>
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
                        <h3>{stat.stat.name}</h3>
                        <span className="bar">
                          <span
                            className="skill"
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