import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
