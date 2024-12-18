import { memo } from "react";

const TodoRangeInput = ({ todoRange, setTodorange }) => {
  return (
    <div>
      <label>
        from
        <input
          type="number"
          value={todoRange.from}
          onChange={(e) => setTodorange({ ...todoRange, from: e.target.value })}
        />
      </label>
      <label>
        to
        <input
          type="number"
          value={todoRange.to}
          onChange={(e) => setTodorange({ ...todoRange, to: e.target.value })}
        />
      </label>
    </div>
  );
};

const MemoizedTodoRangeInput = memo(TodoRangeInput);
export { MemoizedTodoRangeInput as TodoRangeInput };
