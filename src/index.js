import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {booksReducer} from "./features/books/booksSlice";
import {authorsReducer} from "./features/authors/authorsSlice";
import { combineReducers } from "redux";

const reducers = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
