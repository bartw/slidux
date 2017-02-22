import React from 'react';
import './SideBarButtons.scss';

export default class SideBarButtons extends React.Component {
  render() {
    return (
      <div className="sidebar-buttons">
        <div className="center">
          <button className="btn btn-primary" onClick={e => {
            e.preventDefault();
            this.props.onAdd();
          }}><i className="fa fa-plus" aria-hidden="true"></i> Add</button>
          <button className="btn btn-primary" onClick={e => {
            e.preventDefault();
            this.props.onStartPresentation();
          }}><i className="fa fa-play" aria-hidden="true"></i> Start</button>
          <button className="btn btn-primary" onClick={e => {
            e.preventDefault();
            this.props.onExport();
          }}><i className="fa fa-external-link" aria-hidden="true"></i> Export</button>
        </div>
        <div className="center">
          <button className="btn btn-primary" onClick={e => {
            e.preventDefault();
            this.props.onClear();
          }}><i className="fa fa-times" aria-hidden="true"></i> Clear All</button>
          <button className="btn btn-primary" onClick={e => {
            e.preventDefault();
            this.props.onSwitchTheme();
          }}><i className="fa fa-magic" aria-hidden="true"></i> Switch Theme</button>
        </div>
      </div>
    );
  }
}

SideBarButtons.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
  onExport: React.PropTypes.func.isRequired,
  onSwitchTheme: React.PropTypes.func.isRequired,
  onStartPresentation: React.PropTypes.func.isRequired,
  onClear: React.PropTypes.func.isRequired
};