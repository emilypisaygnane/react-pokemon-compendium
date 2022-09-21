import './Compendium.css';
import { usePokemon } from '../../hooks/usePokemon.js';

export default function Compendium() {
  const { loading, pokemon, error } = usePokemon();
  if (loading) 
    return <div className="loader"></div>;
  return (
    <div>
      <p>{error}</p>
      {pokemon.map((poke) => (
        <div key={poke}>
          <h1>{poke.pokemon}</h1>
          <h3>{poke.type_1}</h3>
          <h3>{poke.type_2}</h3>

        </div>
      ))}
    </div>
  );
}