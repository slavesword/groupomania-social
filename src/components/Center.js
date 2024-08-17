import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Center({ isFormOpen, toggleForm }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image && !text) {
      alert('Please provide at least an image or text');
      return;
    }
  
    let imageUrl = null;
    if (image) {
      // Upload the image to Supabase Storage
      const fileName = `${Date.now()}-${image.name}`;
      const { data, error } = await supabase.storage
        .from('images')
        .upload(fileName, image);
      
      if (error) {
        alert('Error uploading image');
        return;
      }
  
      imageUrl = `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/images/${fileName}`;
    }

    // Insert the post data into the 'posts' table
    const { error } = await supabase.from('posts').insert([{ image_url: imageUrl, text }]);

  if (error) {
    alert('Error saving post');
    return;
  }

  setImage(null);
  setText('');
  toggleForm();
};

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 100 * 1024 * 1024) {
      setImage(file);
    } else {
      alert('Image size should be less than 100MB');
    }
  };

  return (
    <div className="center">
      {isFormOpen && (
        <form className="post-form" onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text (optional)"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Center;