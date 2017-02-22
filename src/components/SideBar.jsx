import React from 'react';
import ListContainer from '../containers/ListContainer';
import SideBarButtonsContainer from '../containers/SideBarButtonsContainer';
import './SideBar.scss';

export default class SideBar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div id="header">          
          <img src={this.props.isDark ? "assets/logo-dark.png" : "assets/logo.png"} alt="slidux" />
          <p className="tag-line">by <a href="https://bartw.github.io/" target="_blank">Bart Wijnants <i className="fa fa-github" aria-hidden="true"></i></a></p>
          <a className="btn btn-link" href="https://github.com/bartw/slidux" target="_blank"><span><i className="fa fa-code-fork" aria-hidden="true"></i> Fork me on GitHub</span></a>
        </div>
        <ListContainer />
        <SideBarButtonsContainer />
      </div>
    );
  }
}

SideBar.propTypes = {
    isDark: React.PropTypes.bool
};