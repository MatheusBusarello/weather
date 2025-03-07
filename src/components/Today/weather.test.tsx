import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react';
import { Today } from './index';
import { WeatherResponseProps } from '../../services/getWeatherByCity';
import { CityProps } from '../../services/getCityByNameService';

// Mock dos dados
const mockWeather: WeatherResponseProps = {
  temp: 25,
  temp_min: 18,
  temp_max: 28,
  description: 'Ensolarado',
  details: {
    name: 'weather details',
    bg_day: 'url_to_day_image',
    bg_night: 'url_to_night_image',
    icon_day: 'url_to_day_icon',
    icon_night: 'url_to_night_icon',
  },
};

const mockCity: CityProps = {
  id: 1,            // Adicionando 'id'
  name: 'Joinville', // Nome da cidade
  latitude: -26.3044, // Latitude da cidade
  longitude: -48.8483, // Longitude da cidade
};

describe('Today Component', () => {
  it('should render city name, current temperature, and weather details correctly', () => {
    render(
      <Today
        city={mockCity.name}
        weather={mockWeather}
        onSearchValue={() => {}}
        isFavorited={false}
        onToggleFavorite={() => {}}
      />
    );

    // Verificar se o nome da cidade e a temperatura estão sendo exibidos
    expect(screen.getByText(/Joinville/i)).toBeInTheDocument();
    expect(screen.getByText(/25ºc/i)).toBeInTheDocument();
    expect(screen.getByText(/18ºc \/ 28ºc/i)).toBeInTheDocument();
    expect(screen.getByText(/Ensolarado/i)).toBeInTheDocument();

    // Verificar se a imagem do clima (ícone) está sendo exibida
    expect(screen.getByAltText(/Tempo/i)).toHaveAttribute('src', 'url_to_day_icon');
  });
});
