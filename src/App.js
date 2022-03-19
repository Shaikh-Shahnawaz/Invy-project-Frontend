
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import GreetUser from './pages/GreetUser';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          {/* <Header/> */}
          <Routes>
          {/* <Route  path="*" element={<PageNotFound />} /> */}
            {/* <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/user" element={<GreetUser/>} />

          </Routes>
        </div>
      </Router>
    
    </div>
  );
}

export default App;
