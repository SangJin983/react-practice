export const TodoItem = ({ todo, onTodoDelete, onTodoChecked }) => {
  return (
    <li className="todo-item" key={todo.id}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={(event) => onTodoChecked(todo.id, event.target.checked)}
      />
      <span
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "none",
        }}
      >
        {todo.content}
      </span>
      <button className="delete-button" onClick={() => onTodoDelete(todo.id)}>
        삭제
      </button>
    </li>
  );
};
