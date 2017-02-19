import React from 'react';

export default class SideBarButtons extends React.Component {
  render() {
    return (
      <div id="sidebarbuttons">
        <button onClick={e => {
          e.preventDefault();
          this.props.onAdd();
        }}>Add</button>
        <button onClick={e => {
          e.preventDefault();
          this.props.onExport();
        }}>Export</button>
        <button onClick={e => {
          e.preventDefault();
          this.props.onSwitchTheme();
        }}>Switch theme</button>
      </div>
    );
  }
}

SideBarButtons.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
  onExport: React.PropTypes.func.isRequired,
  onSwitchTheme: React.PropTypes.func.isRequired
};