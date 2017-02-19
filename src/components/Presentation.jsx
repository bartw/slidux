import React from 'react';
import Preview from './Preview';

export default class Presentation extends React.Component {
    render() {
        return (
            <div id="presentation">
                <Preview slide={this.props.slide} />
                <div id="presentationButtons">
                    <button onClick={e => {
                        e.preventDefault();
                        this.props.onPreviousSlide();
                    }}>Previous</button>
                    <button onClick={e => {
                        e.preventDefault();
                        this.props.onNextSlide();
                    }}>Next</button>
                    <button onClick={e => {
                        e.preventDefault();
                        this.props.onStopPresentation();
                    }}>Stop</button>
                </div>
            </div>
        );
    }
}

Presentation.propTypes = {
    slide: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        content: React.PropTypes.string.isOptional,
    }),
    onStopPresentation: React.PropTypes.func.isRequired,
    onPreviousSlide: React.PropTypes.func.isRequired,
    onNextSlide: React.PropTypes.func.isRequired
};