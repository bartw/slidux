import React from 'react';
import ListItemContainer from '../containers/ListItemContainer';

export default class List extends React.Component {
  render() {
    const listItems = this.props.slides.map(slide => <ListItemContainer key={slide.id} slide={slide} />);
    return (
      <div id="list">
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
    name: React.PropTypes.string.isOptional,
    content: React.PropTypes.string.isOptional,
  })).isRequired
};