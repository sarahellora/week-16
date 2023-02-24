import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UpdateForm from "./UpdateForm";

const BookList = (props) => {
  const {
    title,
    author,
    handleDelete,
    id,
    handleUpdate,
    setShowForm,
    showForm,
  } = props;

  return (
    <div className="bookContainer">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVQ-OWyJzjU8w_2-jFsO8ez9uhyWAFxjbJg&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{author}</Card.Text>
          <Button variant="danger" onClick={() => handleDelete(id)}>
            Delete
          </Button>{" "}
          <Button onClick={() => setShowForm(true)}>Update</Button>
          {showForm && (
            <UpdateForm
              id={id}
              title={title}
              author={author}
              handleUpdate={handleUpdate}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
export default BookList;
