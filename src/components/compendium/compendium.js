import './Compendium.css';
import { usePokemon } from '../../hooks/usePokemon.js';
import Select from '../controls/Select';

export default function Compendium() {
  const { 
    loading, 
    pokemon, 
    error, 
    types,
    selectedType,
    setSelectedType
  } = usePokemon();
 
  if (loading) 
    return <div className="loader"></div>;
 
  return (
    <>
      <p>{error}</p>
      <Select types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
      <main>
        {pokemon.map((poke) => (
          <div key={poke.id}>
            <h1 className='Name'>{poke.pokemon}</h1>
            <h3 className='Type1'>{poke.type_1}</h3>
            <h3 className='Type2'>{poke.type_2}</h3>
            <img className='Images' src={poke.url_image} alt={poke.poke} />

          </div>
        ))}
      </main>
    </>
  );
}