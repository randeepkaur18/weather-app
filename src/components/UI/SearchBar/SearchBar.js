import React from 'react';

import './SearchBar.css';

const searchBar = (props) => {
    //const { includedProp } = props;
    return (
            <div className="searchBar">
                <span className="mapIcon"><i className="fa fa-map-marker"></i></span>
                <span className="searchIcon" onClick={props.clicked}>
                    <i className="fa fa-search"></i>
                </span>
                <input type="search" id="searchBar" placeholder="Search..." />
            </div>

        // <div className="searchBar" includedProp={includedProp}>
        //     <input type="text" value="India" id="country" disabled={true} />
        //     <input type="text" placeholder="Search.." id="searchBar" />
        //     <button onClick={props.getWeatherByLocation}>Search</button>
        // </div>
    )
}

export default searchBar;