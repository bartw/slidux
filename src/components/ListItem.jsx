import React from 'react';
import Preview from './Preview.jsx';

export default class ListItem extends React.Component {
  render() {
    return (
      <li>
          <Preview />
      </li>
    );
  }
}