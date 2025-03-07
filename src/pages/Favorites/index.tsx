import './styles.css';
import { useState, useEffect } from 'react';
import { CityProps } from '../../services/getCityByNameService';
import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function Favorites() {
  const [favorites, setFavorites] = useState<CityProps[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('@typeweather:favorites') ?? '[]');
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (cityName: string) => {
    const updatedFavorites = favorites.filter(city => city.name !== cityName);
    setFavorites(updatedFavorites);
    localStorage.setItem('@typeweather:favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <section className="favorites">
      <header>
        <Link to="/dashboard">
          <ArrowBackIcon className="return-page"/>
        </Link>
        <h2>Cidades Favoritas</h2>
      </header>

      {favorites.length === 0 ? (
        <p>Nenhuma cidade favoritada ainda.</p>
      ) : (
        <ul>
          {favorites.map((city) => (
            <li key={city.name}>
              <Link to={`/dashboard/${encodeURIComponent(city.name)}`} className="city-favorite">
                {city.name}
              </Link>
              <CancelIcon onClick={() => removeFavorite(city.name)} className="cancelFavorite" />

            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
