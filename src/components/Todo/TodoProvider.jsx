import { createContext, useReducer } from "react";
import { initialTodoState, reducer } from "./todoReducer";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialTodoState);

  const addTodo = () => {
    dispatch({
      type: "addTodo",
    });
  };

  const setTodoInput = (todoInput) => {
    dispatch({
      type: "setTodoInput",
      newTodoInput: todoInput,
    });
  };

  const removeTodo = (id) => {
    dispatch({
      type: "removeTodo",
      todoId: id,
    });
  };

  const setIsCompleted = (id, isCompleted) => {
    dispatch({
      type: "setIsCompleted",
      todoId: id,
      isCompleted,
    });
  };

  return (
    <TodoContext.Provider
      value={{ state, addTodo, setTodoInput, removeTodo, setIsCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
};
