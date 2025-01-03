import { useContext } from "react";
import { PomodoroContext } from "./PomodoroProvider";

export const usePomo = () => {
  const pomoState = useContext(PomodoroContext);

  if (pomoState == null) {
    throw new Error("usePomo must be used within a PomoProvider");
  }

  return pomoState;
};
