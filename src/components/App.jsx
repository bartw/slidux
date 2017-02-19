import React from 'react';
import ExportContainer from '../containers/ExportContainer';
import SideBar from './SideBar.jsx';
import DetailsContainer from '../containers/DetailsContainer';

export default class App extends React.Component {
    render() {
        return (
            <div id="app" className={this.props.isDark ? 'dark' : ''}>
                <ExportContainer />
                <SideBar />
                <DetailsContainer />
            </div>
        );
    }
}

App.propTypes = {
    isDark: React.PropTypes.bool
};