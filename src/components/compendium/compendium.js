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
      <main className='main'>
        {pokemon.map((poke) => (
          <div className='poke' key={poke.id}>
            <h1 className='Name'>{poke.pokemon}</h1>
            <img className='Images' src={poke.url_image} alt={poke.poke} />
            <h3>type(s): {poke.type_1}</h3>
            {poke.type_2 !== 'NA' && <h3>{poke.type_2}</h3>}
            <h3>hp: {poke.hp}</h3>
            <h3>gen id: {poke.generation_id}</h3>
          </div>
        ))}
      </main>
    </>
  );
}