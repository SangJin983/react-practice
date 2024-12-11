import { useReducer } from "react";
import { initialTodoState, reducer } from "./todoReducer";
import "./Todo.css";

const Todo = () => {
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
    <div className="todo-container">
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          value={state.todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button className="add-button" onClick={addTodo}>
          추가
        </button>
      </div>
      <ul className="todo-list">
        {state.todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={(event) =>
                setIsCompleted(todo.id, event.target.checked)
              }
            />
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.content}
            </span>
            <button
              className="delete-button"
              onClick={() => removeTodo(todo.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
