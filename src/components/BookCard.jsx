// src/components/BookCard.jsx

import React from "react";
import "./BookCard.css"; // Import the CSS for styling

const BookCard = ({ book }) => {
  const { title, author, description, coverImage } = book;

  return (
    <div className="book-card">
      <img src={coverImage} alt={`${title} cover`} className="book-cover" />
      <div className="book-details">
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">by {author}</h3>
        <p className="book-description">{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
