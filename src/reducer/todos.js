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
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        project: action.payload.project,
        type: action.payload.type,
        who: action.payload.who,
        what: action.payload.what,
        priority: action.payload.priority,
        done: false
      };
      state.todosList = [...state.todosList, newTodo];
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
    },

    changeType: (state, action) => {
      const todoIndex = state.todosList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todosList[todoIndex].type = action.payload.type;
    }
  }
});

export const { completeTodo, deleteTodo, changeType, newTodo } = todos.actions;
