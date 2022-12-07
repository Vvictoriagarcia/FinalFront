import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";


export const initialState = {themes: {
    light: {
      className : ""
    },
    dark : {
      className : "dark"
    }
// }, data: []}
  }
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.themes.light)
  const [data, setData] = useState()
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  return (
    <ContextGlobal.Provider value={{
      theme, 
      setTheme,
      data,
      setData
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};
 export const useContextGlobal = () => {
  return useContext(ContextGlobal)
 }