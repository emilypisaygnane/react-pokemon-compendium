import './Compendium.css';
import { usePokemon } from '../../hooks/usePokemon.js';
import Select from '../controls/Select';
import Search from '../controls/Search';

export default function Compendium() {
  const { 
    loading, 
    pokemon, 
    error, 
    types,
    setSelectedType,
    search,
    setSearch,
  } = usePokemon();
  
 
  if (loading) 
    return <div className="loader"></div>;
 
  return (
    <main className='main'>
      <p>{error}</p>
      
      <div>
        <Search 
          search={search} 
          setSearch={setSearch} 
          setSelectedType={setSelectedType} />

        <Select 
          types={types} 
          setSelectedType={setSelectedType}
          setSearch={setSearch} />
      </div>

      <div className='pokemon'>
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
      </div>
    </main>
  );
}