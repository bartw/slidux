import React from 'react';
import Preview from './Preview.jsx';
import Edit from './Edit.jsx';

export default class Details extends React.Component {
  render() {
    return (
      <div>
          <Preview />
          <Edit />
      </div>
    );
  }
}