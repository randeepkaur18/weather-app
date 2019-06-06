import React, { Component } from 'react';

import Header from '../Header/Header';
import MainContainer from '../../containers/MainContainer/MainContainer';

import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <MainContainer />
            </div>
        );
    }
}

export default Layout;
