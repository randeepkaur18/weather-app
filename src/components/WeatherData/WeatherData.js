import React from 'react';

import SearchBar from '../UI/SearchBar/SearchBar';

import moment from 'moment';
import './WeatherData.css';
import 'open-weather-icons/dist/css/open-weather-icons.css';

const weatherData = (props) => {
    console.log(props.weatherData);
    return (
        <div className="weatherData">
            <SearchBar clicked={props.getWeatherByLocation} />
            <div className="weather">
                <div className="icon">
                    <div className={`owi owi-${props.weatherData.list[0].weather[0].icon}`}></div>
                </div>
                <div className="temperature">
                    {(props.weatherData.list[0].main.temp - 273.15).toFixed(0)}
                    <sup style={{fontSize: '40px !important'}}>&deg;C</sup>
                </div>
            </div>
            <div className="data">{props.weatherData.list[0].weather[0].description}</div>
            <div className="details">
                <div>Humidity: {props.weatherData.list[0].main.humidity}%</div>
                <div>Wind: {props.weatherData.list[0].wind.speed} km/h</div>
            </div>
            <div className="date">{moment(props.weatherData.date).format('LLLL')}</div>
        </div>
    );
}

export default weatherData;