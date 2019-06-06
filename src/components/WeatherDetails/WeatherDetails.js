import React from 'react';

import moment from 'moment';
import './WeatherDetails.css';
import 'open-weather-icons/dist/css/open-weather-icons.css';

const weatherDetails = (props) => {
    return (
        <div className="weaterDetails">
            {props.weatherData.list.map((item, index) => {
                if(props.weatherData.list.length === 1) {
                    return null;
                }
                if(index < 4) {
                    return (
                        <div key={item.dt_txt} className="weatherDetail">
                            {/* <div className="weatherDetail-row"> */}
                                <div>{moment(item.dt_txt).format('h a')}</div>
                                <div className={`owi owi-${item.weather[0].icon}`}></div>
                                <div>{(item.main.temp - 273.15).toFixed(0)}<sup>&deg;C</sup></div>
                            {/* </div> */}
                        </div>
                    )
                }
                
            })}
        </div>
    );
}

export default weatherDetails;