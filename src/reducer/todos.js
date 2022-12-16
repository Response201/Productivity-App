import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";

export const todos = createSlice({
  name: "todos",
  initialState: {
    todosList: [],
    getnewTodo: {}
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
        status: "",
        done: false
      };
      state.getnewTodo = newTodo;
    },

    /* set the "getnewTodo" back to {} */
    setGetNewTodo: (state, action) => {
      state.getnewTodo = {};
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
    },

    changeStatus: (state, action) => {
      const todoIndex = state.todosList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todosList[todoIndex].status = action.payload.status;
    },

    setTodoList: (state, action) => {
      state.todosList = action.payload;
    }
  }
});

export const {
  completeTodo,
  deleteTodo,
  changeType,
  newTodo,
  changeStatus,
  setProjectList,
  setTodoList,
  setGetNewTodo
} = todos.actions;

/* get list of all todos */

export const GetTodoList = () => {
  return async (dispatch) => {
    const options = {
      method: "GET"
    };

    fetch(`${process.env.REACT_APP_URL}/list`, options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTodoList(data));
      });
  };
};

/* new todo */

export const NewTodo = () => {
  return (dispatch, getState) => {
    if (getState().todos.getnewTodo !== {}) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: getState().todos.getnewTodo.title,
          description: getState().todos.getnewTodo.description,
          project: getState().todos.getnewTodo.project,
          type: getState().todos.getnewTodo.type,
          who: getState().todos.getnewTodo.who,
          what: getState().todos.getnewTodo.what,
          priority: getState().todos.getnewTodo.priority
        })
      };

      fetch(`${process.env.REACT_APP_URL}/newTask`, options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            batch(() => {
              dispatch(setGetNewTodo());
              dispatch(GetTodoList());
            });
          }
        });
    }
  };
};

/* update todo */

export const UpdateTodo = ({ id, status, type, done }) => {
 

  return (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        status,
        type,
        done
      })
    };

    fetch(`${process.env.REACT_APP_URL}/updateTodo`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
         
            console.log("done");
            dispatch(GetTodoList());
         
        }
      });
  };
};

/* Delete todo /deleteTodo */


export const DeleteThis = ({id}) => {
 

  return (dispatch) => {
    const options = {
      method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
         id:id
        })
    };

    fetch(`${process.env.REACT_APP_URL}/deleteTodo`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
      
            dispatch(GetTodoList());
         
        }
      });
  };
};