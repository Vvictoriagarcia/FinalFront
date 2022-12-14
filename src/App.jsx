
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import "./index.css"
import axios from 'axios'
import { useState, useEffect } from "react";
import { useContextGlobal,ContextGlobal, initialState } from "./Components/utils/global.context";



function App() {
  const {data} = useContextGlobal()
  const {theme, setTheme} = useContextGlobal()

  const handleChangeTheme = () => {
    if(theme === initialState.themes.light) {
      setTheme(initialState.themes.dark)
    }else {
      setTheme(initialState.themes.light)
    }
  }
  
  
  return (
      <div className={"App " + theme.className}>
        <ContextGlobal.Provider value={{theme, handleChangeTheme, data}}>        
         <Navbar/> 
          <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/favs" element={<Favs/>} />
                <Route path="/:id" element={<Detail/>}/>
          </Routes>
        <Footer /> 
        </ContextGlobal.Provider>
      </div>
  );
}


export default App;
