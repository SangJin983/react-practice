import { memo } from "react";

const TodoRangeInput = ({ todoRange, setTodoRange }) => {
  return (
    <div>
      <label>
        from
        <input
          type="number"
          value={todoRange.from}
          onChange={(e) => setTodoRange({ ...todoRange, from: e.target.value })}
        />
      </label>
      <label>
        to
        <input
          type="number"
          value={todoRange.to}
          onChange={(e) => setTodoRange({ ...todoRange, to: e.target.value })}
        />
      </label>
    </div>
  );
};

const MemoizedTodoRangeInput = memo(TodoRangeInput);
export { MemoizedTodoRangeInput as TodoRangeInput };
