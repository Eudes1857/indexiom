import { compose, configureStore, createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import rootReducer from "../features/reducers"
export default initialState => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
  };