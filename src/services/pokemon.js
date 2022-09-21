export async function fetchPokemon(selectedType) {
  const params = new URLSearchParams();
  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }

  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}