import './Weather.css'
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
// import cloud_icon from '../Assets/cloud.png';
// import drizzle_icon from '../Assets/drizzle.png';
// import rain_icon from '../Assets/rain.png';
// import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const Weather = () => {
    return (
      <>
        <div className="weather">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <img src={search_icon} alt="search_icon" />
          </div>
          <img src={clear_icon} alt="clear_icon" className="weather-icon" />
          <p className="temperature">16c</p>
          <p className="location">London</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="humidity_icon" />
              <div>
                <p>91 %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="wind_icon" />
              <div>
                <p>3.6 Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Weather;