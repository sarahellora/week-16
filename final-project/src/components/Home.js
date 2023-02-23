import React, {useEffect,useState}from 'react'
import axios from 'axios';
import BookList from './BookList';
import {useHistory} from 'react-router-dom'


const Home = () => {
    const [initialData, setInitialData] = useState()
    const history = useHistory();


    useEffect(() => {
      axios.get('https://63f4610d2213ed989c416cd7.mockapi.io/users')
          .then(response =>{
                  setInitialData(response.data)
              }
          );
      },[])
      function handleDelete(id){
        axios.delete(`https://63f4610d2213ed989c416cd7.mockapi.io/users/${id}`).then(() => setInitialData(
          initialData.filter((post) => {
             return post.id !== id;
          })) )
        }
  
      function handleAdd(e,author,title){
        e.preventDefault();
        axios.post('https://63f4610d2213ed989c416cd7.mockapi.io/users',{title:title,author:author}).then((response) => {
          setInitialData([response.data, ...initialData]);
       });
  
      } 
      const handleUpdate = async(e,author,title,id) => {
        await axios.put(`https://63f4610d2213ed989c416cd7.mockapi.io/users/${id}`,{title:title,author:author}).then((response) => {
          setInitialData([response.data, ...initialData]);
       });
      }
  return (
    <div className="home">
         {initialData?.map((book, index)=>
            <BookList
            key={index}
            title={book.title}
            author={book.author}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            id={book.id}
            />
      )}

   
    </div>
  );
}
 
export default Home;