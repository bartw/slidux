import React from 'react';
import showdown from 'showdown';

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.converter = new showdown.Converter();
  }
  render() {
    const slideHtml = { __html: this.converter.makeHtml(this.props.slide.content) };
    return (
      <div className="preview">
        <div>{this.props.slide.name}</div>
        <div className="content" dangerouslySetInnerHTML={slideHtml} />
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