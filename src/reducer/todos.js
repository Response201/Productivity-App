import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

export const todos = createSlice({
  name: "todos",
  initialState: {
    todosList: [...data]
  },
  reducers: {
    newTodo: (state, action) => {
      const newTodo = {
        "id":state.todosList.length,
        "title": action.payload.title,
        "description": action.payload.description,
        "category": [{ "type": action.payload.type, "where": action.payload.where }],
        "done": false


      }
      state.todosList = [...state.todosList, newTodo]
      
    },

    completeTodo: (state, action) => {
      const todoIndex = state.todosList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todosList[todoIndex].done = action.payload.done;
     
    },

    deleteTodo: (state, action) => {
      const todoIndex = state.todosList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todosList.splice(todoIndex, 1);
    }
  }
});

export const { completeTodo, deleteTodo } = todos.actions;
