import React from 'react';
import ListContainer from '../containers/ListContainer';
import SideBarButtonsContainer from '../containers/SideBarButtonsContainer';

export default class SideBar extends React.Component {
  render() {
    return (
      <div id="sidebar">
          <ListContainer />
          <SideBarButtonsContainer />
      </div>
    );
  }
}