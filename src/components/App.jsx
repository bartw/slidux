import React from 'react';
import ExportContainer from '../containers/ExportContainer';
import SideBar from './SideBar.jsx';
import DetailsContainer from '../containers/DetailsContainer';
import PresentationContainer from '../containers/PresentationContainer';

export default class App extends React.Component {
    render() {
        return (
            <div id="app" className={this.props.isDark ? 'dark' : ''}>
                <ExportContainer />
                <SideBar />
                <DetailsContainer />
                {this.props.showPresentation && <PresentationContainer />}
            </div>
        );
    }
}

App.propTypes = {
    isDark: React.PropTypes.bool,
    showPresentation: React.PropTypes.bool
};