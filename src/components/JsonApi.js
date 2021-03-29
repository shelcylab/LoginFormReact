import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JsonApi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5006/api/books').then((response) => {
      setPosts(response.data);
      console.log(response);
    });
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPosts(data);
    //     console.log(data);
    //   });
  }, []);

  //add task sample
  // const addTask = async (e) => {
  //   e.preventDefault();

  //   let token = localStorage.getItem('token');
  //   let config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-auth-token': token,
  //     },
  //   };

  //   let data = {
  //     author,
  //     subject,
  //   };
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:5006/api/books',
  //       data,
  //       config
  //     );


  //     console.log('task added');
  //   } catch (e) {
  //     console.log(e.response.data.errors);
  //   }
  // };

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

const Post = (props) => {
  return (
    <div>
      <h1>{props.post.author}</h1>
      <p>{props.post.subject}</p>
    </div>
  );
};
export default JsonApi;
