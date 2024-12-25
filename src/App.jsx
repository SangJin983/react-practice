import { useState } from "react";
import "./App.css";
import Pomodoro from "./Pomodoro/Pomodoro";
import Todo from "./Todo/Todo";

const App = () => {
  const [activeComponent, setComponent] = useState("Todo");

  return (
    <div className="App">
      <h1>{activeComponent}</h1>

      <div className="button-container">
        <button onClick={() => setComponent("Todo")}>Todo</button>
        <button onClick={() => setComponent("Pomodoro")}>Pomodoro</button>
      </div>

      {activeComponent === "Todo" && <Todo />}
      {activeComponent === "Pomodoro" && <Pomodoro />}
    </div>
  );
};

export default App;
