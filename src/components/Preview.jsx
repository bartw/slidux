import React from 'react';
import showdown from 'showdown';

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    showdown.setFlavor('github');
    showdown.extension('targetlink', function () {
      return [{
        type: 'html',
        regex: /(<a [^>]+?)(>.*<\/a>)/g,
        replace: '$1 target="_blank"$2'
      }];
    });
    this.converter = new showdown.Converter({ extensions: ['targetlink'] });
  }
  render() {
    const slideHtml = { __html: this.converter.makeHtml(this.props.slide.content) };
    return (
      <div className="preview">
        <div className="content" dangerouslySetInnerHTML={slideHtml} />
      </div>
    );
  }
}

Preview.propTypes = {
  slide: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    content: React.PropTypes.string.isOptional,
  }).isRequired
};