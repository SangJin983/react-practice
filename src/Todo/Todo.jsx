import { range } from "lodash";
import { useMemo, useReducer, useState } from "react";
import { MockTodos } from "../Practice/Practice";
import "./Todo.css";
import { TodoItem } from "./TodoItem";
import { TodoRangeInput } from "./TodoRangeInput";
import { initialTodoState, reducer } from "./todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialTodoState);
  const [mockTodoIdRange, setMockTodoIdRange] = useState({ from: 1, to: 2 });

  const todoIds = useMemo(() => {
    return range(
      Math.min(mockTodoIdRange.from, mockTodoIdRange.to),
      Math.max(mockTodoIdRange.from, mockTodoIdRange.to)
    );
  }, [mockTodoIdRange]);

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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="todo-container">
      <TodoRangeInput
        todoRange={mockTodoIdRange}
        setTodorange={setMockTodoIdRange}
      />
      <MockTodos todoIds={todoIds} />
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          value={state.todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="할 일을 입력하세요"
        />
        <button className="add-button" onClick={addTodo}>
          추가
        </button>
      </div>
      <ul className="todo-list">
        {state.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onTodoDelete={removeTodo}
            onTodoChecked={setIsCompleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
