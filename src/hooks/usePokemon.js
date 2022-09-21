import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemon(data);
        setLoading(false);
      } catch (e) {
        setError('No Pokemon For You');
      }
    };
    loadData();
  }, []);
  return { loading, pokemon, error };
}
