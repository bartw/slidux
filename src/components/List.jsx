import React from 'react';
import ListItemContainer from '../containers/ListItemContainer';
import './List.scss';

export default class List extends React.Component {
  render() {
    const listItems = this.props.slides.map(slide => <ListItemContainer key={slide.id} slide={slide} />);
    return (
      <div className="slides-list">
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  slides: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    content: React.PropTypes.string.isOptional,
  })).isRequired
};