
import {Routes,Route} from "react-router-dom"
import Home from "../src/pages/home"
import Biodata from "../src/pages/biodata"
import Nav from "../src/components/Nav"

function App() {
  
  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biodata" element={<Biodata />} />

    </Routes>
    </>
      
      
  )
}

export default App
