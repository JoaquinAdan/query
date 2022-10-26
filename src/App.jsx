import "./App.css";
import Home from "./components/LogIn/Home";
import Loby from "./components/master/Loby";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Loby />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
