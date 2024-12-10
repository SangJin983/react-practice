import { useReducer } from "react";
import Todo from "./Todo/Todo";
import Pomodoro from "./Pomodoro/Pomodoro";
import "./App.css";

const App = () => {
  const initialComponentState = {
    title: "앱 선택(초기:Todo)",
    component: Todo,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "todo":
        return {
          ...state,
          title: "Todo",
          component: Todo,
        };

      case "pomodoro":
        return {
          ...state,
          title: "Pomodoro",
          component: Pomodoro,
        };

      default:
        throw new Error("invaild action type");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialComponentState);
  const ComponentToRender = state.component;

  return (
    <div className="App">
      <h1>{state.title}</h1>

      <button onClick={() => dispatch({ type: "todo" })}>Todo App</button>
      <button onClick={() => dispatch({ type: "pomodoro" })}>
        Pomodoro App
      </button>

      <ComponentToRender />
    </div>
  );
};

export default App;
