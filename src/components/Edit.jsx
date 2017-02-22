import React from 'react';
import './Edit.scss';

export default class Edit extends React.Component {
    render() {
        return (
            <div className="edit">
                <div className="form-group">
                    <textarea placeholder="Content" value={this.props.slideContent} onChange={(e) => this.props.onUpdateContent(e.target.value)} />
                </div>
                <div className="form-group pull-right">
                    <button className="btn btn-secondary" onClick={e => {
                        e.preventDefault();
                        this.props.onMoveUp();
                    }}><i className="fa fa-arrow-up" aria-hidden="true"></i> Move up</button>
                    <button className="btn btn-secondary" onClick={e => {
                        e.preventDefault();
                        this.props.onMoveDown();
                    }}><i className="fa fa-arrow-down" aria-hidden="true"></i> Move down</button>
                    <button className="btn btn-secondary" onClick={e => {
                        e.preventDefault();
                        this.props.onRemove();
                    }}><i className="fa fa-times" aria-hidden="true"></i> Remove</button>
                </div>
            </div>
        );
    }
}

Edit.propTypes = {
    slideContent: React.PropTypes.string,
    onRemove: React.PropTypes.func.isRequired,
    onMoveUp: React.PropTypes.func.isRequired,
    onMoveDown: React.PropTypes.func.isRequired,
    onUpdateContent: React.PropTypes.func.isRequired
};