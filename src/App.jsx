import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Sign_in } from "./pages/Sign_in";
import { Log_in } from "./pages/Log_in";

function App() {
  const [count, setCount] = useState(0);

  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Sign_in" element={<Sign_in />}></Route>
          <Route path="/Log_in" element={<Log_in />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
