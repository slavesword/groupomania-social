import React, { useState } from "react";

function Card({ onAddPost, index }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && text) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onAddPost(reader.result, text, index);
        setImage(null);
        setText("");
      };
      reader.readAsDataURL(image);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 100 * 1024 * 1024) {
      setImage(file);
    } else {
      alert("Image size should be less than 100MB");
    }
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setText(value);
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text (max 500 characters)"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
    // <div className="content-card">
    //         <div className="top-section"></div>
    //         <div className="middle-section">
    //             <img src= {image} alt="content" />
    //         </div>
    //         <div className="bottom-section"></div>
    //     </div>
  );
}

export default Card;
