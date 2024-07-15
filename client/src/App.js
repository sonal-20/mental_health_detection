
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Welcome from './components/Welcome';
import Questions from './components/Questions';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Result from './components/Result';
import Result2 from './components/Result2';
import ResultThree from './components/ResultThree';




function App() { 
  
  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/result2" element={<Result2/>}/>
        <Route path="/result3" element={<ResultThree/>}/>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
