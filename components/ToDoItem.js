import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function ToDoItem({ item }) {
  return (
    <div>
      <li>{item}</li>
      <button type="button">Edit</button>
      <button type="button">Delete</button>
    </div>
  );
}

ToDoItem.propTypes = {
  item: propTypes.string.isRequired,
};
