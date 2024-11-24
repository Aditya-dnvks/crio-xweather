import { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./WeatherCard";
function App() {
  const [searchText, setSearchText] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    try {
      setLoader(true);
      const resp = await axios.get(
        `https://api.weatherapi.com/v1/current.json?q=${searchText}&key=91b99eb84de1408f8cf73626242411`
      );
      setWeatherData(resp.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch weather data");
    } finally {
      setLoader(false);
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  return (
    <div className="app d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex">
        <input
          type="text"
          placeholder="Enter city name"
          onChange={handleChange}
        />
        <button style={{ backgroundColor: "lightgreen" }} onClick={fetchData}>
          Search
        </button>
      </div>
      <div>
        {loader ? (
          <p> Loading data...</p>
        ) : (
          weatherData && <WeatherCard weatherData={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
