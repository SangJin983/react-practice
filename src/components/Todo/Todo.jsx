import { range } from "lodash";
import { useMemo, useState } from "react";
import { MockTodos } from "../Practice/Practice";
import "./Todo.css";
import { TodoInput } from "./TodoInput";
import { TodoItems } from "./TodoItems";
import { TodoRangeInput } from "./TodoRangeInput";

const Todo = () => {
  const [mockTodoIdRange, setMockTodoIdRange] = useState({ from: 1, to: 2 });

  const todoIds = useMemo(() => {
    return range(
      Math.min(mockTodoIdRange.from, mockTodoIdRange.to),
      Math.max(mockTodoIdRange.from, mockTodoIdRange.to)
    );
  }, [mockTodoIdRange]);

  return (
    <div className="todo-container">
      <TodoRangeInput
        todoRange={mockTodoIdRange}
        setTodoRange={setMockTodoIdRange}
      />
      <MockTodos todoIds={todoIds} />
      <TodoInput />
      <TodoItems />
    </div>
  );
};

export default Todo;
