import './styles.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWeatherByCity, GetWeatherByCityResponseProps } from '../../services/getWeatherByCity';

import { Today } from '../../components/Today';
import { Details } from '../../components/Details';
import { Loading } from '../../components/Loading';
import { NextDays } from '../../components/NextDays';
import { CityProps } from '../../services/getCityByNameService';

export function Dashboard() {
  const { cityName } = useParams();
  const [data, setData] = useState<GetWeatherByCityResponseProps>({} as GetWeatherByCityResponseProps);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState<CityProps[]>(JSON.parse(localStorage.getItem('@typeweather:favorites') ?? '[]'));
  
  // Inicializa a cidade com a última pesquisada ou vazia
  const [city, setCity] = useState<CityProps>(() => {
    return JSON.parse(localStorage.getItem('@typewheather:city') ?? '{}');
  });

  useEffect(() => {
    // Se a URL tem uma cidade, busca nos favoritos e atualiza o estado
    if (cityName) {
      const storedFavorites: CityProps[] = JSON.parse(localStorage.getItem('@typeweather:favorites') ?? '[]');
      const selectedCity = storedFavorites.find(fav => fav.name === cityName);

      if (selectedCity) {
        setCity(selectedCity);
        localStorage.setItem('@typewheather:city', JSON.stringify(selectedCity)); // Atualiza o localStorage
      }
    }
  }, [cityName]); // Atualiza sempre que a URL mudar

  useEffect(() => {
    if (!city.name) return; // Se não há cidade, evita erro

    setIsLoading(true);
    getWeatherByCity({ latitude: city.latitude, longitude: city.longitude })
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  }, [city]);

  const toggleFavorite = () => {
    const isAlreadyFavorite = favorites.some(fav => fav.name === city.name);

    let updatedFavorites;
    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter(fav => fav.name !== city.name);
    } else {
      updatedFavorites = [...favorites, city];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('@typeweather:favorites', JSON.stringify(updatedFavorites));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='dashboard'>
      <Today 
        city={city.name} 
        onSearchValue={setCity} 
        weather={data.today.weather} 
        isFavorited={favorites.some(fav => fav.name === city.name)}
        onToggleFavorite={toggleFavorite}
      />
      <Details data={data.today.details} />
      <NextDays data={data.nextDays} />
    </div>
  );
}
