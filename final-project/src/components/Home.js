import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "./BookList";

const Home = () => {
  const [initialData, setInitialData] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get("https://63f4610d2213ed989c416cd7.mockapi.io/users")
      .then((response) => {
        setInitialData(response.data);
      });
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://63f4610d2213ed989c416cd7.mockapi.io/users/${id}`)
      .then(() =>
        setInitialData(
          initialData.filter((post) => {
            return post.id !== id;
          })
        )
      );
  }

  function handleAdd(e, author, title) {
    e.preventDefault();
    axios
      .post("https://63f4610d2213ed989c416cd7.mockapi.io/users", {
        title: title,
        author: author,
      })
      .then((response) => {
        setInitialData([response.data, ...initialData]);
      });
  }
  const handleUpdate = (e, author, title, id) => {
    e.preventDefault();
    axios
      .put(`https://63f4610d2213ed989c416cd7.mockapi.io/users/${id}`, {
        title: title,
        author: author,
      })
      .then((response) => {
        const filterArray = initialData.filter((post) => {
          return post.id !== id;
        });
        setInitialData([response.data, ...filterArray]);
        setShowForm(false);
      });
  };
  return (
    <div className="home">
      {initialData?.map((book, index) => (
        <BookList
          key={index}
          title={book.title}
          author={book.author}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          id={book.id}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      ))}
    </div>
  );
};

export default Home;
