import { useEffect, useState, memo } from "react";

/*
얘는 props고
{
todoIds: [1, 3, 5],
}
요렇게 생겼다
*/

const MockTodos = ({ todoIds }) => {
  const [mockTodos, setMockTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      const todosReponses = await Promise.all(
        todoIds
          .map((id) => `https://jsonplaceholder.typicode.com/todos/${id}`)
          .map((url) => fetch(url))
      );

      const todos = await Promise.all(todosReponses.map((res) => res.json()));

      setIsLoading(false);
      setMockTodos(todos);
    };
    fetchTodos();
  }, [todoIds]);

  return (
    <div>
      {isLoading
        ? "로딩 중"
        : mockTodos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </div>
  );
};

const MemoizedMockTodos = memo(MockTodos);
export { MemoizedMockTodos as MockTodos };
