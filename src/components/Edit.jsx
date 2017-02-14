import React from 'react';

export default class Edit extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Name" />
                </div>
                <div>
                    <textarea placeholder="Content" />
                </div>
            </div>
        );
    }
}