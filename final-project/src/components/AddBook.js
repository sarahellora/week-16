import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddBook = (props) => {
  const { title, author, handleAdd } = props;

  const [formTitle, setFormTitle] = useState(title);
  const [formAuthor, setFormAuthor] = useState(author);
  

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
      <Form onSubmit={(e) => handleAdd(e, formAuthor, formTitle)}>
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
export default AddBook;