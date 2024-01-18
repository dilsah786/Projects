import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  products: [],
  loading:false,
  counter: 0,
};

export const store = legacy_createStore(reducer, initialState);
