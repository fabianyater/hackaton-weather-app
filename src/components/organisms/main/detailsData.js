import clouds from '../../../assets/images/clouds.svg';
import pressure from '../../../assets/images/pressure.svg';
import precipitation from '../../../assets/images/precipitation.svg';
import visibility from '../../../assets/images/visibility.svg';
import humidity from '../../../assets/images/humidity.svg';
import wind from '../../../assets/images/wind.svg';

export const detailsData = (data) => [
  {
    value: data.current.humidity,
    description: 'Humedad',
    source: humidity,
    alt: 'Highlight icon',
    unit: '%'
  },
  {
    value: data.current.vis_km,
    description: 'Visibilidad',
    source: visibility,
    alt: 'Highlight icon',
    unit: 'Km'
  },
  {
    value: data.current.wind_kph,
    description: 'Viento',
    source: wind,
    alt: 'Highlight icon',
    unit: 'Km/h'
  },
  {
    value: data.current.humidity,
    description: 'Presión',
    source: pressure,
    alt: 'Highlight icon',
    unit: 'mbar'
  },
  {
    value: data.current.vis_km,
    description: 'Precipitación',
    source: precipitation,
    alt: 'Highlight icon',
    unit: 'mm'
  },
  {
    value: data.current.wind_kph,
    description: 'Nubes',
    source: clouds,
    alt: 'Highlight icon',
    unit: '%'
  },
]