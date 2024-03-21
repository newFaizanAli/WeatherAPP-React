import React, { useState } from "react";
import { getWeatherData, getCondtionImage } from "./component";
import _ from "lodash";

const MainPage = () => {
  const [City, setCity] = useState("");
  const [WeatherData, setWeatherData] = useState({});
  const [conditionImage, setConditionImage] = useState("");
  const InputDebounce = _.debounce(filterCity, 500);

  const cardStyle = {
    background: `linear-gradient(135deg, #00feba, #5b548a)`,
  };

  const inputStyle = {
    background: "#ebfffc",
  };

  async function filterCity() {
    let cityData = await getWeatherData(City);

    if (cityData && cityData.main) {
      const temperature = parseFloat((cityData.main.temp - 273.15).toFixed(2));
      const weather_condition = cityData.weather[0].description;
      const wind_speed = cityData.wind.speed.toFixed(2);
      const humidity = cityData.main.humidity.toFixed(2);
      const weatherImg = getCondtionImage(weather_condition);
      setConditionImage(weatherImg);
     
      setWeatherData({
        temperature: temperature,
        condition: weather_condition,
        wind: wind_speed,
        humidity: humidity,
      });
    }
  }

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="card p-3 border-0 shadow-sm" style={cardStyle}>
        <div className="d-flex justify-content-center gap-3">
          <div>
            <input
              type="text"
              placeholder="Enter City Name"
              className="form-control rounded-4"
              style={inputStyle}
              onChange={(e) => {
                setCity(e.target.value);
                setWeatherData({});
                InputDebounce();
              }}
            />
          </div>
        
        </div>
        {City.length > 0 && (
          <>
            {Object.keys(WeatherData).length > 0 ? (
              <div className="text-center p-2">
                <img className="h-50 w-50" src={conditionImage} alt="" />
                <h1 className="h1 fw-bold">{WeatherData.temperature}°C</h1>
                <h4 className="h4">{WeatherData.condition}</h4>
                <h2 className="h2 fw-bold">{City.toUpperCase()}</h2>

                <div className="d-flex justify-content-around gap-2 p-2">
                  <div>
                    <img className="h-25 w-25" src="/image/wind.png" alt="" />
                    <h4 className="h4">{WeatherData.wind}</h4>
                    <b>Wind</b>
                  </div>
                  <div>
                    <img src="/image/humidity.png" alt="" />
                    <h4 className="h4">{WeatherData.humidity}</h4>
                    <b>Humidity</b>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5">No weather data available 🚨.</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
