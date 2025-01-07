import { useContext } from "react";
import TypingContext from "./TypingContext";

export const useTyping = () => {
  const typingState = useContext(TypingContext);

  if (typingState == null) {
    throw new Error("useTyping must be used within a TypingProvider");
  }

  return typingState;
};
