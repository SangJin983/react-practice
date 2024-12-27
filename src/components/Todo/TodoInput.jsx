import { memo } from "react";

const TodoInput = ({ todoInput, setTodoInput, handleKeyDown, onAddTodo }) => {
  return (
    <div className="todo-input-container">
      <input
        type="text"
        className="todo-input"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요"
      />
      <button className="add-button" onClick={onAddTodo}>
        추가
      </button>
    </div>
  );
};

const MemoizedTodoInput = memo(TodoInput);
export { MemoizedTodoInput as TodoInput };
