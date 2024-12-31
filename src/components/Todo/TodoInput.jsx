import { memo } from "react";
import { useTodo } from "./useTodo";

const TodoInput = () => {
  const {state, addTodo, setTodoInput} = useTodo();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
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
  );
};

const MemoizedTodoInput = memo(TodoInput);
export { MemoizedTodoInput as TodoInput };

