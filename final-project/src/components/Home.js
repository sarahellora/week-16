import React from "react";
import BookList from "./BookList";


const Home = (props) => {
  //decunstructing props for ease
  const {handleDelete,handleUpdate,initialData,showForm,setShowForm} = props
 //mapping through the inital data to make a card for each book
  return (
    <div className="home">
      {initialData.map((book, index) => (
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
