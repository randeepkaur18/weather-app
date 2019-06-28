import React, { Component } from 'react';

import WeatherData from '../../components/WeatherData/WeatherData';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import SubContainer from '../SubContainer/SubContainer'

import './WeatherContainer.css'

const defaultValues = {
    location: 'bangalore',
    countryCode: 'in'
}

class WeatherContainer extends Component {
    state = {
        weatherData: null,
        error: false
    }

    // It will execute after the creation is finished for the component.
    componentDidMount() {
        this.getWeather(defaultValues.location, defaultValues.countryCode);
    }

    // Gets the value from the search input field and calls the Weather API
    getWeatherByLocation = () => {
        const location = document.getElementById('searchBar').value.toLowerCase();
        this.getWeather(location, defaultValues.countryCode);
    }

    // GET request (using FETCH) to get the weather data from the weather API. 
    getWeather = (location, countryCode) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location},${countryCode}&appid=305e8ece4e883a1156bbfc03bfe81004`)
            .then(response => {
                return response.json();
            })
            .then(weatherData => {
                console.log(weatherData)
                if(weatherData.cod === '404') {
                    this.setState({ error: true});
                }
                this.setState({ weatherData });
                document.getElementById('searchBar').value = location;
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: true });
            });
    }

    render() {
        let showWeather = null;
        let weatherForDays = [];
        console.log(this.state.weatherData)
        if (this.state.weatherData && this.state.weatherData.city) {
            let distinctDate = [];
            let weatherForDay = {};

            // get the distinct days
            let dateArray = this.state.weatherData.list.map(data => {
                return data.dt_txt.split(' ')[0];
            })
            distinctDate = [...new Set(dateArray)];

            // combine the weather data for days 
            distinctDate.forEach((date) => {
                weatherForDay = {
                    date: '',
                    list: []
                };
                weatherForDay.date = date;
                weatherForDay.list = this.state.weatherData.list.filter(data => {
                    return date === data['dt_txt'].split(' ')[0].toString()
                })
                weatherForDays.push(weatherForDay);
            })

            showWeather = (
                <div className="ui-card weatherContainer">
                    <div className="weatherContainer1">
                        <WeatherData getWeatherByLocation={this.getWeatherByLocation}
                            weatherData={weatherForDays[0]}
                        />
                        <WeatherDetails weatherData={weatherForDays[1]} />
                    </div>
                    <div className="weatherContainer2">
                        <SubContainer weatherData={weatherForDays} />
                    </div>
                </div>
            )

        }
        else if (this.state.error) {
            showWeather = (
                <div className="ui-card weatherContainer">
                    <div className="weatherContainer1">
                        <WeatherData getWeatherByLocation={this.getWeatherByLocation}
                            weatherData={weatherForDays[0]}
                            cityNotFound
                        />
                    </div>
                </div>
            );
        }
        else {
            showWeather = (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Loading...</h1>
                </div>
            );
        }
        // console.log(this.state.weatherData.cod.value);

        return showWeather;
    }
}

export default WeatherContainer;