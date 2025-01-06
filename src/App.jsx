import { useState } from "react";
import { match } from "ts-pattern";
import "./App.css";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import { PomodoroProvider } from "./components/Pomodoro/PomodoroProvider";
import Stock from "./components/Stock/Stock";
import Todo from "./components/Todo/Todo";
import { TodoProvider } from "./components/Todo/TodoProvider";
import { Typing } from "./components/Typing/Typing";
import { TypingProvider } from "./components/Typing/TypingProvider";

const App = () => {
  const [activeComponent, setComponent] = useState("Todo");

  return (
    <div className="App">
      <h1>{activeComponent}</h1>

      <div className="button-container">
        <button onClick={() => setComponent("Todo")}>Todo</button>
        <button onClick={() => setComponent("Pomodoro")}>Pomodoro</button>
        <button onClick={() => setComponent("Stock")}>Stock</button>
        <button onClick={() => setComponent("Typing")}>Typing</button>
      </div>

      {match(activeComponent)
        .with("Todo", () => (
          <TodoProvider>
            <Todo />
          </TodoProvider>
        ))
        .with("Pomodoro", () => (
          <PomodoroProvider>
            <Pomodoro />
          </PomodoroProvider>
        ))
        .with("Stock", () => <Stock />)
        .with("Typing", () => (
          <TypingProvider>
            <Typing />
          </TypingProvider>
        ))
        .exhaustive()}
    </div>
  );
};

export default App;
