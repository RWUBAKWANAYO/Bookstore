const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const books = [
  { id: 1, author: 'Alfredo Covelli', title: 'Vahana Masterclass' },
  { id: 2, author: 'R. Giridharan', title: 'Right Under Our Nose' },
  { id: 3, author: 'Ramachandra Guha', title: 'The Commonwealth of Cricket' },
  { id: 4, author: 'Hunter Biden ', title: 'Beautiful Things’ A Memoir' },
];

export const AddBookFunc = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});
export const RemoveBookFunc = (id) => ({
  type: REMOVE_BOOK,
  id,
});

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
    default:
      return state;
  }
};

export default BooksReducer;
