import axios from 'axios';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const books = [];

export const AddBookFunc = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});
export const RemoveBookFunc = (id) => ({
  type: REMOVE_BOOK,
  id,
});
export const getBooksFunc = () => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`);
    return dispatch({ type: GET_BOOKS, payload: response.data });
  } catch (err) { return err; }
};

const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOKS:
      return Object.keys(action.payload)
        .map((el) => ({ ...action.payload[el][0], id: el }));
    default:
      return state;
  }
};

export default BooksReducer;
