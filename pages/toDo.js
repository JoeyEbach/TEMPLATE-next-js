import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ToDoForm from '../components/ToDoForm';
// import ToDoItem from '../components/ToDoItem';

export default function ToDo() {
  const [form, setForm] = useState(false);

  return (
    <>
      <h1>To Do App</h1>
      <Button type="button" onClick={() => setForm(true)}>Add To Do Item</Button>
      <div>{form ? <ToDoForm /> : ''}</div>
      <h3>Things To Do</h3>
      {/* <ToDoItem /> */}
    </>
  );
}
