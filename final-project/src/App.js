import React, { useEffect, useState } from "react";
import axios from "axios";import './App.css';
import { BrowserRouter as Router, Route, Switch,useHistory } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
//Using useState to set the state of the app
  const [initialData, setInitialData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();

//Creating a useEffect to set the initialData coming in from the get request.
//UseEffect will fire automatically after rending. Setting an empty depency array will set it to fire only once
// I am setting the state at the top of the app the initial data will need to be passed as props to each component
  useEffect(() => {
    //sending get request
    axios
      .get("https://63f4610d2213ed989c416cd7.mockapi.io/users")
      .then((response) => {
        //setting set state to the response data
        setInitialData(response.data);
      });
  }, []);

  
//Creating a function to handle delete request
  function handleDelete(id) {
    if(window.confirm('Are you sure you want to delete')){
      //delete request will only fire if the user check ok and value is true
    axios
          //passing the id and using a template literal to add to the string 
      .delete(`https://63f4610d2213ed989c416cd7.mockapi.io/users/${id}`)
      .then(() =>
        setInitialData(
          initialData.filter((book) => {
            //updating state to return everything except the deleted id
            return book.id !== id;
          })
        )
      );
  }}
//created a function to handle the add request
  function handleAdd(e, author, title) {
    axios
      .post("https://63f4610d2213ed989c416cd7.mockapi.io/users", {
        title: title,
        author: author,
      })
      .then((response) => {
        //setting state to the response plus the initial data
        setInitialData([response.data, ...initialData]);
      });
      //alerting that adding was successful and returing to the home page
    alert('Book Added')
    history.replace('/');
  }
  //created a function to handle the update request
  const handleUpdate = (e, author, title, id) => {
    e.preventDefault();
    axios
          //passing the id and using a template literal to add to the string 
      .put(`https://63f4610d2213ed989c416cd7.mockapi.io/users/${id}`, {
        title: title,
        author: author,
      })
      .then((response) => {
        //setting the state to return the everything but the updated item 
        //then adding the response to that array and updating state
        //closing the form 
        const filterArray = initialData.filter((post) => {
          return post.id !== id;
        });
        setInitialData([response.data, ...filterArray]);
        setShowForm(false);
      });
  };

//wrapping all components of the app in the router 
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home handleDelete={handleDelete} handleUpdate={handleUpdate} initialData={initialData} setShowForm={setShowForm} showForm={showForm} />
            </Route>
            <Route exact path="/addBook">
              <AddBook handleAdd={handleAdd} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
