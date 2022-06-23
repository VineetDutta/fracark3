import React, { createContext, useMemo, useContext } from "react";

export interface DispatchType {
  type: string;
  payload: any;
}

export interface ContextType {
  state: StateType;
  dispatch: React.Dispatch<DispatchType>;
}

export type StateType = {
  darkMode: boolean;
};

const initialState: StateType = {
  darkMode: true,
};

export const GlobalContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<DispatchType>;
}>({ state: initialState, dispatch: () => null });

export const useGlobalContext = (): ContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }
  return context;
};

interface IProps {
  children?: React.ReactNode;
}

  export const GlobalProvider: React.FC<IProps> = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const value = useMemo(() => ({ state, dispatch }), [state]);

    return (
      <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    );
  };
