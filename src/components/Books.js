import React from "react";
import AddBook from "./AddBook";
import Book from "./Book";

const Books = () => {
  return (
    <>
      <Book title="Book title" author="Book author" />
      <AddBook />
    </>
  );
};

export default Books;
