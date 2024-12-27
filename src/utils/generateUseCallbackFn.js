import { useCallback } from "react";

export const generateUseCallbackFn = (fn, deps = []) => useCallback(fn, deps);
