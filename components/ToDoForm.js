import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function ToDoForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add A To Do Item</Form.Label>
        <Form.Control type="text" placeholder="Add A To Do Item" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
