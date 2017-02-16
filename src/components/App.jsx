import React from 'react';
import SideBar from './SideBar.jsx';
import DetailsContainer from '../containers/DetailsContainer';

export default class App extends React.Component {
    render() {
        return (
            <div id="app">
                <SideBar />
                <DetailsContainer />
            </div>
        );
    }
}