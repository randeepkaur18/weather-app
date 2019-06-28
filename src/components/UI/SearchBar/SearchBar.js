import React from 'react';

import './SearchBar.css';

const searchBar = (props) => {
    return (
        <div className="ui icon input searchBar">
            <input type="text" placeholder="Search..." id="searchBar" className="searchBar-input" />
            <i aria-hidden="true"
                className="search icon searchBar-searchIcon">
            </i>
        </div>


        // <div className="searchBar">
        //     <span className="mapIcon"><i className="fa fa-map-marker"></i></span>
        //     <input type="search" id="searchBar" placeholder="Search..." />
        //     <span className="searchIcon" onClick={props.clicked}>
        //         <i className="fa fa-search"></i>
        //     </span>
        // </div>
    )
}

export default searchBar;