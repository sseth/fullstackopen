const Weather = ({ data }) => {
  const weather = Object.keys(data).length ? (
    <div style={{ marginTop: 30 }}>
      <h3>Weather in {data.name}</h3>
      <div>
        <b>Conditions</b>: {data.weather[0].main}
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
      <div>
        <div>
          <b>Temperature</b>: {data.main.temp}ºC
        </div>
        <div>
          <b>Wind</b>: {data.wind.speed} ms<sup>-1</sup>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ marginTop: 20 }}>Weather data not available</div>
  );
  return weather;
};

export default Weather;
