import React from 'react';

export default class Preview extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.slide.name}</div>
        <div>{this.props.slide.content}</div>
      </div>
    );
  }
}

Preview.propTypes = {
  slide: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isOptional,
    content: React.PropTypes.string.isOptional,
  }).isRequired
};