import { useTodo } from "./useTodo";

const TodoCheckBox = ({ ...props }) => {
  return <input {...props} type="checkbox" />;
};

export const TodoItems = () => {
  const { state, removeTodo, setIsCompleted } = useTodo();

  return (
    <ul className="todo-list">
      {state.todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <TodoCheckBox
            checked={todo.isCompleted}
            onChange={(event) => setIsCompleted(todo.id, event.target.checked)}
          />
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.content}
          </span>
          <button className="delete-button" onClick={() => removeTodo(todo.id)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};
