import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { getPokemons, getPokemonImage, getPokemon } from "../../services/api";
import { ButtonPagination, HomeContainer } from "./styles";
import { getAverageRGB } from "../../utils/getAverageColor";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [pagination, setPagination] = useState(0);
  const [pokemons, setPokemons] = useState<any>([]);
  const [pokemonsImg, setPokemonsImages] = useState<any>([]);

  const navigate = useNavigate();

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
  };

  const setAverageColor = () => {
    const img = document.getElementsByClassName('pokemon_img');
    const imgArray = Array.from(img);

    imgArray.forEach((img: any) => {
      img.onload = () => {
        const { R, G, B } = getAverageRGB(img, 4);
        img.parentNode.style.background = `rgb(${R}, ${G}, ${B})`
      }
    });
  };

  const navigateToPokemon = async (name: string) => {
    await getPokemon(name);
    navigate(`/pokemon/${name}`);
  }

  useEffect(() => {
    renderPokemons();
  }, [pagination]);

  useEffect(() => {
    setAverageColor();
  }, [pokemonsImg]);

  return (
    <div>
      <Header />
      <HomeContainer>
        {
          pokemons.map((pokemon: any) => {
            return (
              <div
                key={pokemon.name}
                className="pokemon_card"
                onClick={() => navigateToPokemon(pokemon.name)}
              >
                <img src={pokemonsImg[pokemons.indexOf(pokemon)]} alt={pokemon.name} className="pokemon_img" />
                <h1>{pokemon.name.toUpperCase()}</h1>
              </div>
            )
          })
        }
        <div>
          <ButtonPagination
            onClick={() => setPagination(pagination - 20)}
            disabled={pagination === 0 ? true : false}
          >
            -
          </ButtonPagination>
          <ButtonPagination onClick={() => setPagination(pagination + 20)}>+</ButtonPagination>
        </div>
      </HomeContainer>
    </div>
  );
}

export default Home;