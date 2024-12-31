import { useState } from "react";
import "./App.css";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import Stock from "./components/Stock/Stock";
import Todo from "./components/Todo/Todo";
import { TodoProvider } from "./components/Todo/TodoProvider";

const App = () => {
  const [activeComponent, setComponent] = useState("Todo");

  return (
    <div className="App">
      <h1>{activeComponent}</h1>

      <div className="button-container">
        <button onClick={() => setComponent("Todo")}>Todo</button>
        <button onClick={() => setComponent("Pomodoro")}>Pomodoro</button>
        <button onClick={() => setComponent("Stock")}>Stock</button>
      </div>

      {activeComponent === "Todo" && (
        <TodoProvider>
          <Todo />
        </TodoProvider>
      )}
      {activeComponent === "Pomodoro" && <Pomodoro />}
      {activeComponent === "Stock" && <Stock />}
    </div>
  );
};

export default App;
