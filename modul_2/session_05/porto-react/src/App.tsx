import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "../src/pages/home"
import Biodata from "../src/pages/biodata"

function App() {
  
  return (
   <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/biodata" element ={<Biodata/>}/>

   </Routes>
      
      
  )
}

export default App
