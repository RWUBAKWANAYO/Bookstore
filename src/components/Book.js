import React from "react";

const Book = (props) => {
  const { title, author } = props;
  return (
    <>
      <h3>{title}</h3>
      <h4>{author}</h4>
    </>
  );
};

export default Book;
