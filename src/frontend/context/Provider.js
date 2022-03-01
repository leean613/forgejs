import React, { createContext, useReducer } from "react";
import appReducer from "./reducers/appReducer";
import appInitialState from "./initialstates/appInitialState";
import sidebarReducer from "./reducers/sidebarReducer";
import sidebarInitialState from "./initialstates/sidebarInitialState";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, appInitialState);
  const [sidebarState, sidebarDispatch] = useReducer(sidebarReducer, sidebarInitialState);

  return (
    <GlobalContext.Provider
      value={{
        appState,
        appDispatch,
        sidebarState,
        sidebarDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
