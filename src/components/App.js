import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import Navbar from './Navbar';
import Footer from './Footer';
import LeftBar from './Leftbar';
import Center from './Center';
import RightBar from './Rightbar';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.log('Error fetching posts:', error);
    } else {
      setPosts(data);
    }
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div>
      <Navbar />
      <LeftBar />
      <Center isFormOpen={isFormOpen} toggleForm={toggleForm} />
      <div className="posts">
            {posts.map((post) => (
              <div key={post.id} className="post">
                {post.image_url && <img src={post.image_url} alt="Post" />}
                {post.text && <p>{post.text}</p>}
              </ div>
              ))}
              </div>
      <RightBar />
      <Footer toggleForm={toggleForm}/>
    </ div>
      
  );
}

export default App;
