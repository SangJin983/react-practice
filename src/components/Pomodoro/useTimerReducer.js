const initialTimerState = {
  duration: 25 * 60,
  remainingTime: 25 * 60,
  isRunning: false,
};

const timerReducer = (state, action) => {
  switch (action.type) {
    case "SET_DURATION":
      return {
        ...state,
        duration: action.payload,
        remainingTime: action.payload,
      };

    case "START_TIMER":
      return {
        ...state,
        isRunning: true,
      };

    case "TICK":
      return {
        ...state,
        remainingTime: state.remainingTime - 1,
      };

    case "STOP_TIMER":
      return {
        ...state,
        isRunning: false,
      };

    case "RESET_TIMER":
      return {
        ...state,
        remainingTime: state.duration,
        isRunning: false,
      };

    default:
      throw new Error("invalid action type");
  }
};

export { initialTimerState, timerReducer };
