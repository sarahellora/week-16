import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateForm = (props) => {
  const { id, handleUpdate, title, author } = props;
//you can set state in function components so I used this for the form 
  const [formTitle, setFormTitle] = useState(title);
  const [formAuthor, setFormAuthor] = useState(author);
//creating  functions to handle form value
  const handleAuthor = (e) => {
    const author = e.target.value;
    setFormAuthor(author);
  };
  const handleTitle = (e) => {
    const title = e.target.value;
    setFormTitle(title);
  };

  return (
    <>
    {/* passing the form state to handle update as arguments */}
      <Form onSubmit={(e) => handleUpdate(e, formAuthor, formTitle, id)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            as="textarea"
            value={formTitle}
            placeholder="Title"
            onChange={(e) => handleTitle(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            as="textarea"
            value={formAuthor}
            placeholder="Author"
            onChange={(e) => handleAuthor(e)}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default UpdateForm;
