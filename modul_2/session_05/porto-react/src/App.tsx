
import {Routes,Route} from "react-router-dom"
import Home from "../src/pages/home"
import Nav from "../src/components/Nav"

function App() {
  
  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
    </>
      
      
  )
}

export default App
