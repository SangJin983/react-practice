import { v4 as generateUuid } from "uuid";

const initialTodoState = {
  todos: [],
  todoInput: "",
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "addTodo": {
      if (prevState.todoInput.trim() === "") {
        return { ...prevState, todoInput: "" };
      }

      return {
        todos: [
          ...prevState.todos,
          {
            id: generateUuid(),
            content: prevState.todoInput.trim(),
            isCompleted: false,
          },
        ],
        todoInput: "",
      };
    }

    case "setTodoInput": {
      return {
        todos: [...prevState.todos],
        todoInput: action.newTodoInput,
      };
    }

    case "removeTodo": {
      return {
        todos: prevState.todos.filter((todo) => todo.id !== action.todoId),
        todoInput: prevState.todoInput,
      };
    }

    case "setIsCompleted": {
      const targetIndex = prevState.todos.findIndex(
        (todo) => todo.id === action.todoId
      );

      const newTodos = [...prevState.todos.map((todo) => ({ ...todo }))];
      newTodos[targetIndex].isCompleted = action.isCompleted;

      return {
        ...prevState,
        todos: newTodos,
      };
    }

    default:
      throw new Error("invaild action type");
  }
};

export { initialTodoState, reducer };
