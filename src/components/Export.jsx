import React from 'react';
import './Export.scss';

export default class Export extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.show &&
                    <div className="export">
                        <div>
                            <div className="form-group">
                                <textarea readOnly value={this.props.exported} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="GitHub Username" value={this.props.username} onChange={(e) => this.props.onUpdateUsername(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="GitHub Password" value={this.props.password} onChange={(e) => this.props.onUpdatePassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Notification" value={this.props.notification} readOnly />
                            </div>
                            <div className="form-group pull-right">
                                <button className="btn btn-secondary" onClick={e => {
                                    e.preventDefault();
                                    this.props.onCreateGist();
                                }}><i className="fa fa-github-alt" aria-hidden="true"></i> Create gist</button>
                                <button className="btn btn-secondary" onClick={e => {
                                    e.preventDefault();
                                    this.props.onClose();
                                }}><i className="fa fa-times" aria-hidden="true"></i> Close</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

Export.propTypes = {
    show: React.PropTypes.bool,
    notification: React.PropTypes.string,
    username: React.PropTypes.string,
    password: React.PropTypes.string,
    onUpdateUsername: React.PropTypes.func.isRequired,
    onUpdatePassword: React.PropTypes.func.isRequired,
    onCreateGist: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func.isRequired
};