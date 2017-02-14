import React from 'react';
import SideBar from './SideBar.jsx';
import Details from './Details.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <SideBar />
                <Details />
            </div>
        );
    }
}