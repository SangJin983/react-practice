import { useContext } from "react";
import { TodoContext } from "./TodoProvider";

export const useTodo = () => {
  const todoState = useContext(TodoContext);

  if (todoState == null) {
    throw new Error("provider not initialized");
  }

  return todoState;
};
