import {
  ADD_ONE,
  CREATE_TODO_PENDING,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_PENDING,
  DELETE_TODO_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_PENDING,
  GET_TODO_SUCCESS,
  SUB_ONE,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_PENDING,
  UPDATE_TODO_SUCCESS,
} from "./actionTypes";

// Counter app actions are below

export const ADD = (payload) => {
  return { type: ADD_ONE, payload: 1 };
};

export const SUB = (payload) => {
  return { type: SUB_ONE, payload: 1 };
};

//  Products related action are below

export const getProductsRequest = (payload) =>{
  return {type: GET_PRODUCT_PENDING,payload}
}

export const getProductsSuccess = (payload) =>{
  return {type: GET_PRODUCT_SUCCESS,payload}
}

export const getProductsFailure = (payload) =>{
  return {type: GET_PRODUCT_FAILURE,payload}
}

// Todo related actions are below
export const createTodoRequest = (payload) =>{
  return {type: CREATE_TODO_PENDING,payload}
}

export const createTodoSuccess = (payload) =>{
  return {type: CREATE_TODO_SUCCESS,payload}
}

export const createTodoFailure = (payload) =>{
  return {type: createTodoFailure,payload}
}

export const getTodoRequest = (payload) =>{
  return {type: GET_TODO_PENDING,payload}
}

export const getTodoSuccess = (payload) =>{
  return {type: GET_TODO_SUCCESS,payload}
}

export const getTodoFailure = (payload) =>{
  return {type: GET_TODO_FAILURE,payload}
}
export const updateTodoRequest = (payload) =>{
  return {type: UPDATE_TODO_PENDING,payload}
}

export const updateTodoSuccess = (payload) =>{
  return {type: UPDATE_TODO_SUCCESS,payload}
}

export const updateTodoFailure = (payload) =>{
  return {type: UPDATE_TODO_FAILURE,payload}
}
export const deleteTodoRequest = (payload) =>{
  return {type: DELETE_TODO_PENDING,payload}
}

export const deleteTodoSuccess = (payload) =>{
  return {type: DELETE_TODO_SUCCESS,payload}
}

export const deleteTodoFailure = (payload) =>{
  return {type: DELETE_TODO_FAILURE,payload}
}