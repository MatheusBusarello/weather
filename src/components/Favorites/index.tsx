import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <section className='favorites'>
      <Link to="/">🔙 Voltar</Link>
      <h1>🌟 Cidades Favoritas</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma cidade favoritada ainda.</p>
      )}
    </section>
  );
}
