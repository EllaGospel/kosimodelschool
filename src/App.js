import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import About from "./Component/About";

function App() {
  return (
    <>
    <div>
      <Router>
     <Nav/>
     <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/about' element={<About />}/>
     
     </Routes>
     </Router>
     </div>
    </>
  );
}


export default App;
