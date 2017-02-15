import React from 'react';

export default class Edit extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Name" value={this.props.slideName} onChange={(e) => this.props.onUpdateName(e.target.value)} />
                </div>
                <div>
                    <textarea placeholder="Content" value={this.props.slideContent} onChange={(e) => this.props.onUpdateContent(e.target.value)} />
                </div>
            </div>
        );
    }
}

Edit.propTypes = {
    slideName: React.PropTypes.string,
    slideContent: React.PropTypes.string,
    onRemove: React.PropTypes.func.isRequired,
    onUpdateName: React.PropTypes.func.isRequired,
    onUpdateContent: React.PropTypes.func.isRequired
};