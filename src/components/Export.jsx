import React from 'react';

export default class Export extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.exported &&
                    <div id="export">
                        <div>
                            <div className="formgroup">
                                <textarea readOnly value={this.props.exported} />
                            </div>
                            <div className="formgroup">
                                <input type="text" placeholder="GitHub Username" value={this.props.username} onChange={(e) => this.props.onUpdateUsername(e.target.value)} />
                            </div>
                            <div className="formgroup">
                                <input type="password" placeholder="GitHub Password" value={this.props.password} onChange={(e) => this.props.onUpdatePassword(e.target.value)} />
                            </div>
                            <div className="formgroup">
                                <input type="text" placeholder="Gist url" value={this.props.gistUrl} readOnly />
                            </div>
                            <div className="formgroup">
                                <button onClick={e => {
                                    e.preventDefault();
                                    this.props.onCreateGist();
                                }}>Create gist</button>
                                <button onClick={e => {
                                    e.preventDefault();
                                    this.props.onClose();
                                }}>Close</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

Export.propTypes = {
    exported: React.PropTypes.string,
    username: React.PropTypes.string,
    password: React.PropTypes.string,
    onUpdateUsername: React.PropTypes.func.isRequired,
    onUpdatePassword: React.PropTypes.func.isRequired,
    onCreateGist: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func.isRequired
};