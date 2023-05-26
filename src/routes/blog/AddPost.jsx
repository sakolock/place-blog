// components/AddPost.js
import React from "react";

function AddPost() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input inputType="text" name="title" />
        <label>Content</label>
        <textarea name="content" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPost;
