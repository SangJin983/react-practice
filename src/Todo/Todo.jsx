import { range } from "lodash";
import { useCallback, useMemo, useReducer, useState } from "react";
import { MockTodos } from "../Practice/Practice";
import "./Todo.css";
import { TodoInput } from "./TodoInput";
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

  const generateUseCallbackFn = (fn, deps = []) => useCallback(fn, deps);
  
  const memoizedAddTodo = generateUseCallbackFn(addTodo);
  const memoizedSetTodoInput = generateUseCallbackFn(setTodoInput);
  const memoizedhHndleKeyDown = generateUseCallbackFn(handleKeyDown);

  return (
    <div className="todo-container">
      <TodoRangeInput
        todoRange={mockTodoIdRange}
        setTodoRange={setMockTodoIdRange}
      />
      <MockTodos todoIds={todoIds} />
      <TodoInput
        todoInput={state.todoInput}
        setTodoInput={memoizedSetTodoInput}
        handleKeyDown={memoizedhHndleKeyDown}
        onAddTodo={memoizedAddTodo}
      />
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
