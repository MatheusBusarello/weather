import './styles.css';
import dayjs from 'dayjs';

import { Logo } from '../Logo';
import { SelectCity } from '../SelectCity';
import { ListFavorites } from '../LogoFavorites';
import { isDayTime } from '../../utils/isDayTime';
import { WeatherResponseProps } from '../../services/getWeatherByCity';
import { CityProps } from '../../services/getCityByNameService';
import { Link } from 'react-router-dom';

import { Star, StarBorder } from '@mui/icons-material';

interface Props {
  city: string;
  weather: WeatherResponseProps;
  onSearchValue: (value: CityProps) => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
}

export function Today({ city, weather, onSearchValue, isFavorited, onToggleFavorite }: Props) {
  const today = dayjs(new Date()).format('dddd, DD [de] MMMM [de] YYYY');
  const isDay = isDayTime();

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night;
  const icon = isDay ? weather.details?.icon_day : weather.details?.icon_night;

  return (
    <section className='today'>
      <form>
        <Link to="/">
          <Logo />
        </Link>
        <SelectCity onSelect={onSearchValue} />
        <Link to="/favorites">
          <ListFavorites />
        </Link>
      </form>

      <div className='today-details' style={{ backgroundImage: `url(${bgImg})` }}>
        <header>
          <div>
            <h3>{city}</h3>
            <p>{today}</p>
          </div>
          {/* Ícone de Favorito */}
          <div className="favorite-icon" onClick={onToggleFavorite}>
            {isFavorited ? (
              <Star style={{ color: 'gold', fontSize: 32 }} />
            ) : (
              <StarBorder style={{ color: 'gray', fontSize: 32 }} />
            )}
          </div>
        </header>

        <footer>
          <h1>{weather?.temp}ºc</h1>
          <img src={icon} alt="Tempo" />
        </footer>

        <p>
          {weather?.temp_min}ºc / {weather?.temp_max}ºc <span>&#8226;</span> {weather.description}
        </p>
      </div>
    </section>
  );
}
