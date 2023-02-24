import React, { useEffect, useState } from "react";
import axios from "axios";import './App.css';
import { BrowserRouter as Router, Route, Switch,useHistory } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [initialData, setInitialData] = useState();
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();


  useEffect(() => {
    axios
      .get("https://63f4610d2213ed989c416cd7.mockapi.io/users")
      .then((response) => {
        setInitialData(response.data);
      });
  }, []);

  function handleDelete(id) {

    if(window.confirm('Are you sure you want to delete')){
    axios
      .delete(`https://63f4610d2213ed989c416cd7.mockapi.io/users/${id}`)
      .then(() =>
        setInitialData(
          initialData.filter((post) => {
            return post.id !== id;
          })
        )
      );
  }}

  function handleAdd(e, author, title) {
    axios
      .post("https://63f4610d2213ed989c416cd7.mockapi.io/users", {
        title: title,
        author: author,
      })
      .then((response) => {
        setInitialData([response.data, ...initialData]);
      });
    alert('Book Added')
    history.replace('/');
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
            {/* <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
