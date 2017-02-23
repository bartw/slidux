import React from 'react';
import Preview from './Preview';
import './Presentation.scss';

export default class Presentation extends React.Component {
    render() {
        return (
            <div className="presentation">
                {this.props.slide && <Preview slide={this.props.slide} />}
                <div className="presentation-buttons">
                    <button className="btn btn-primary" onClick={e => {
                        e.preventDefault();
                        this.props.onPreviousSlide();
                    }}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                    <button className="btn btn-primary" onClick={e => {
                        e.preventDefault();
                        this.props.onNextSlide();
                    }}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                    <button className="btn btn-primary" onClick={e => {
                        e.preventDefault();
                        this.props.onStopPresentation();
                    }}><i className="fa fa-stop" aria-hidden="true"></i></button>
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