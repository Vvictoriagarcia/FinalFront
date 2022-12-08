import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const initialState = {themes: {
    light: {
      className : ""
    },
    dark : {
      className : "dark"
    }
  }
}



export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.themes.light)
  const [data, setData] = useState()
  const url ='https://jsonplaceholder.typicode.com/users'
  const bringData = () => {
    axios(url).then(res => {
      setData(res.data)
    })
  }
  bringData()
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  return (
    <ContextGlobal.Provider value={{
      theme, 
      setTheme,
      data
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};
 export const useContextGlobal = () => {
  return useContext(ContextGlobal)
 }