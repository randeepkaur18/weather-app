import React from 'react';

import WeatherContainer from '../WeatherContainer/WeatherContainer';

import './MainContainer.css'

const mainContainer = (props) => {
    return (
        <div className="mainContainer">
            <WeatherContainer />
        </div>
    );
}

export default mainContainer;