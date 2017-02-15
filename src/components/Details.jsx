import React from 'react';
import Preview from './Preview';
import EditContainer from '../containers/EditContainer';

export default class Details extends React.Component {
  render() {
    return (
      <div>
          <Preview slide={this.props.slide} />
          <EditContainer slide={this.props.slide} />
      </div>
    );
  }
}

Details.propTypes = {
  slide: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isOptional,
    content: React.PropTypes.string.isOptional,
  }).isRequired
};