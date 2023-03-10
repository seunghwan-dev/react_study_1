import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/movie/:id" element={<Detail/>}/>    
        <Route path="/hello" element={<div>Hello</div>}/>        
      </Routes>
    </Router>
  );
}

export default App;
