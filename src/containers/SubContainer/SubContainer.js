import React from 'react';
import moment from 'moment';

import './SubContainer.css';
import 'open-weather-icons/dist/css/open-weather-icons.css';

const subContainer = (props) => {
    return (
        <div className="ui-card subContainer">
            {
                props.weatherData.map(item => {
                    return (
                        <div className="ui card subContainer-card" key={item.date}>
                            <div>{moment(item.date).format('dddd')}</div>
                            {/* <div>{moment(item.date).format('LL')}</div> */}
                            <div className={[`owi owi-${item.list[0].weather[0].icon}`, 'subcontainer-icon'].join(' ')}></div>
                            <div style={{paddingTop: '3% !important'}}>
                                {(item.list[0].main.temp - 273.15).toFixed(0)}
                                <sup style={{fontSize: '10px !important'}}>&deg;C</sup>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default subContainer;