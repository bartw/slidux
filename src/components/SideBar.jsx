import React from 'react';
import ListContainer from '../containers/ListContainer';
import SideBarButtonsContainer from '../containers/SideBarButtonsContainer';

export default class SideBar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div id="header">
          <h1>Slidux</h1>
          <h3>By <a href="https://bartw.github.io/" target="_blank">Bart Wijnants</a></h3>
          <h3><a href="https://github.com/bartw/slidux" target="_blank">Fork me</a> on GitHub</h3>
        </div>
        <ListContainer />
        <SideBarButtonsContainer />
      </div>
    );
  }
}