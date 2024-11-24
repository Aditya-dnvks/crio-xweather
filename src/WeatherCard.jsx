import "./WeatherCard.css";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="d-flex weather-cards">
      <div className="weather-card">
        <h6>Temparature</h6>
        <p>{weatherData.current.temp_c}</p>
      </div>
      <div className="weather-card">
        <h6>Humidity</h6>
        <p>{weatherData.current.humidity}</p>
      </div>
      <div className="weather-card">
        <h6>Condition </h6>
        <p>{weatherData.current.condition.text}</p>
      </div>

      <div className="weather-card">
        <h6>Wind Speed</h6>
        <p>{weatherData.current.wind_kph}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
