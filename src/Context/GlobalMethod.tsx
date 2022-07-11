import { StateType } from "./GlobalContext";

export const setDarkMode = (value: boolean, state: StateType): StateType => {
  return { ...state, darkMode: value };
};
