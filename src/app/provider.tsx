"use client";
import React, { createContext, useContext, useEffect, useReducer, ReactNode } from "react";

// Define types for the state and actions
interface State {
  init: boolean;
  user: any; // Replace `any` with the appropriate type for the user
  token: string | null;
}

interface Action {
  type: string;
  payload?: Partial<State>;
}

// Define initial state
const initialState: State = {
  init: true,
  user: null,
  token: null,
};

// Create context with a default value of undefined
const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Reducer function with action handling
const reducer = (current: State, action: Action): State => {
  // If no action type is provided or payload is not defined, return current state
  if (!action.type || !action.payload) {
    return current;
  }

  // Update the state with the payload provided
  const newState = { ...current, ...action.payload };

  // Update localStorage with the new state
  localStorage.setItem("state", JSON.stringify(newState));

  return newState;
};

// Providers component
interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  useEffect(() => {
    const localData = localStorage.getItem("state");
    if (localData) {
      dispatch({ type: 'SET_STATE', payload: JSON.parse(localData) });
    }
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook to use context
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a Providers");
  }
  return context;
}