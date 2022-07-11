import { DispatchType, StateType } from "./GlobalContext";
import * as GlobalType from "./GlobalTypes";
import * as GlobalMethod from "./GlobalMethod";

const GlobalReducer = (state: StateType, action: DispatchType): StateType => {
  switch (action.type) {
    case GlobalType.SET_GLOBAL:
      return GlobalMethod.setDarkMode(action.payload, state);
    default:
      return state;
  }
};

export default GlobalReducer;
