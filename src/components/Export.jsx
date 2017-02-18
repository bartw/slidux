import React from 'react';

export default class Export extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.exported &&
                    <div id="export">
                        <div>
                            <textarea readOnly value={this.props.exported} />
                            <button onClick={e => {
                                e.preventDefault();
                                this.props.onClose();
                            }}>Close</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

Export.propTypes = {
    exported: React.PropTypes.string,
    onClose: React.PropTypes.func.isRequired
};