import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react';
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
  it('should toggle favorite icon when clicked', () => {
    const onToggleFavoriteMock = jest.fn();

    render(
      <Today
        city={mockCity.name}
        weather={mockWeather}
        onSearchValue={() => {}}
        isFavorited={false} // Inicialmente não está favoritado
        onToggleFavorite={onToggleFavoriteMock}
      />
    );

    // Verificar se o ícone de favorito é o "StarBorder" inicialmente
    const favoriteIcon = screen.getByRole('button'); // O ícone é um botão (div com evento onClick)
    expect(screen.getByTestId('favorite-icon')).toBeInTheDocument();
    expect(screen.getByTestId('favorite-icon')).toHaveClass('MuiSvgIcon-root'); // Verifique se é o ícone correto
    expect(screen.getByText(/Joinville/i)).toBeInTheDocument();

    // Simula um clique no ícone
    fireEvent.click(favoriteIcon);

    // Verificar se a função de alternância de favorito foi chamada
    expect(onToggleFavoriteMock).toHaveBeenCalledTimes(1);
  });
});
