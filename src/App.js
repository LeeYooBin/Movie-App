import React from "react";
import './App.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import Home from "./components/Home/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="pageBody">
          <nav id="header">
            <h1>Movie App</h1>
            <ul id="menu">
              <li><Link to="/" className="item">Home</Link></li>
              <li><Link to="/Movies" className="item">Movies</Link></li>
              <li><Link to="/Series" className="item">Series</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Series" element={<Series />}/>
            <Route path="/Movies" element={<Movies />}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;