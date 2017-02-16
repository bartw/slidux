import React from 'react';

export default class SideBarButtons extends React.Component {
  render() {
    return (
      <div id="sidebarbuttons">
        <button onClick={e => {
          e.preventDefault();
          this.props.onAdd();
        }}>Add</button>
      </div>
    );
  }
}

SideBarButtons.propTypes = {
  onAdd: React.PropTypes.func.isRequired
};