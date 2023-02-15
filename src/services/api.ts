export const getPokemons = async (limit: number, offset: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data;
}

export const getPokemonImage = async (id: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  )
  const data = await response.json();
  return data;
}

export const getPokemon = async (name: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const data = await response.json();
  return data;
}