import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "./BookList";

const Home = (props) => {
  const {handleDelete,handleUpdate,initialData,showForm,setShowForm} = props
 
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
