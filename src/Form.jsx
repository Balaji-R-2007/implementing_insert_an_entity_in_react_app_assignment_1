import React, { useState } from "react";
import booksData from "./booksData";

export const Form = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    booksData.push({ id: booksData.length + 1, ...newBook });

    console.log("Updated books array:", booksData);
    
    setNewBook({
      title: "",
      author: "",
      description: "",
      coverImage: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Title</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleChange}
        />

        <h1>Author</h1>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleChange}
        />

        <h1>Description</h1>
        <textarea
          name="description"
          placeholder="Description"
          value={newBook.description}
          onChange={handleChange}
        />

        <h1>Cover Image URL</h1>
        <input
          type="text"
          name="coverImage"
          placeholder="URL"
          value={newBook.coverImage}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
