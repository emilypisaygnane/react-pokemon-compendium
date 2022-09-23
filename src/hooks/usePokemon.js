import { useState, useEffect } from 'react';
import { fetchPokemon, fetchTypes } from '../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemon(selectedType, search);
        setPokemon(data);
        setLoading(false);
      } catch (e) {
        setError('No Pokemon For You');
      }
    };
    loadData();
  }, [selectedType, search]);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const data = await fetchTypes();
        setTypes(data.map((type) => type.type));
      } catch (e) {
        setError('It is not all about the type');
      }
    };
    loadTypes();
  }, []);

  return { 
    loading, 
    pokemon, 
    error,
    types,
    setSelectedType, 
    search, 
    setSearch };
}
