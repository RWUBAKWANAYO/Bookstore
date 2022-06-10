import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';
import { AddBookFunc, getBooksFunc, RemoveBookFunc } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const StoredBook = useSelector((state) => state.BooksReducer);

  useEffect(() => {
    dispatch(getBooksFunc());
  }, []);

  const AddNewBook = (e, NewBook) => {
    e.preventDefault();
    dispatch(AddBookFunc(NewBook));
  };
  const RemoveExistingBook = (id) => {
    dispatch(RemoveBookFunc(id));
  };
  return (
    <div className="books-container">
      {StoredBook.map((item) => (
        <Book
          category={item.category}
          title={item.title}
          key={item.id}
          author={item.author}
          id={item.id}
          RemoveExistingBook={RemoveExistingBook}
        />
      ))}
      <hr className="books-line" />
      <AddBook AddNewBook={AddNewBook} />
    </div>
  );
};

export default Books;
