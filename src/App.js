import logo from "./logo.svg";
import "./App.css";
import Chatbot from "./components/Chatbot";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutbot from "./components/Aboutbot";
import React, { useState, useEffect } from "react";
import Preloader from "./components/preloader";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import ScrollToTop from "./components/Scrolltotop";
import Home from "./components/Home";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
     
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
         <NavBar/>
         <ScrollToTop/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/src/components/Aboutbot.js" element={<Aboutbot/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
