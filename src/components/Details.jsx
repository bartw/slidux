import React from 'react';
import Preview from './Preview';
import EditContainer from '../containers/EditContainer';
import './Details.scss';

export default class Details extends React.Component {
  render() {
    return (
      <div className="details-container">
        {
          this.props.slide &&
          <div className="details">

            <div className="slide-preview">
              <Preview slide={this.props.slide} />
            </div>
            <EditContainer slide={this.props.slide} />
          </div>
        }
      </div>
    );
  }
}

Details.propTypes = {
  slide: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    content: React.PropTypes.string.isOptional,
  })
};