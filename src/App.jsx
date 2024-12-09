import { useState } from "react";
import Todo from "./Todo/Todo";
import Pomodoro from "./Pomodoro/Pomodoro";
import "./App.css";

const App = () => {
  const [activeComponent, setComponent] = useState("todo");

  return (
    <div className="App">
      <h1>앱 선택</h1>
      <button onClick={() => setComponent("todo")}>Todo App</button>
      <button onClick={() => setComponent("pomodoro")}>Pomodoro App</button>

      {activeComponent === "todo" && <Todo />}
      {activeComponent === "pomodoro" && <Pomodoro />}
    </div>
  );
};

export default App;
