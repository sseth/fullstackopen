import axios from 'axios';
import { Weather } from '.';
import { useState, useEffect } from 'react';

const CInfo = ({ country }) => {
  const [weather, setWeather] = useState({});

  const getLangs = () => {
    const langs = [];
    for (let lang in country.languages) {
      langs.push(<li key={lang}>{country.languages[lang]}</li>);
    }
    return langs;
  };

  const getWeather = () => {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const query = encodeURIComponent(`${country.capital[0]},${country.cca3}`);
    const url =
      `${baseUrl}?q=${query}` +
      `&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

    axios(url).then((res) => {
      setWeather(res.data);
    });
  };

  useEffect(getWeather, [country]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>
        <b>Capital</b>: {country.capital[0]}
      </div>
      <div>
        <b>Area</b>: {country.area} km<sup>2</sup>
      </div>
      <h4>Languages:</h4>
      <ul>{getLangs()}</ul>
      <div style={{ marginBottom: 10 }}>
        <b>Flag:</b>
      </div>
      <img src={country.flags.svg} alt="flag" style={{ height: '100px' }} />
      <Weather data={weather} />
    </div>
  );
};

export default CInfo;
