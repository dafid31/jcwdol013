
import './App.css';
import NavigationBar from "./Components/Navigationbar";
import "./style/LandingPage.css"
import Intro from "./Components/Intro"
import Trending from "./Components/Trending"
import Update from "./Components/Update";


function App() {
  return (
  <div>

   {/* Intro Selection */}
    <div className='MyBG'>

    <NavigationBar/>
    <Intro/>
  
    </div>
   {/* Intro End */}

{/* Trending Selection */}
   <div className='trending'>

    <Trending/>

   </div>
   {/* Trending end */}

  {/* Update Selection */}
    <div className='update'>
   <Update/>
    </div>
    {/* Update End */}


    
  
  </div>
  );
}

export default App;
