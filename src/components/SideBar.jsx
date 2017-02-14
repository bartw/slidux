import React from 'react';
import List from './List.jsx';
import SideBarButtons from './SideBarButtons.jsx';

export default class SideBar extends React.Component {
  render() {
    return (
      <div>
          <List />
          <SideBarButtons />
      </div>
    );
  }
}