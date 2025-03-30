import { Outlet } from "react-router-dom";
import './App.css';
import React from "react";
function App() {
  return (
    <>
      <nav>Navbar</nav>
      <Outlet /> {/* This will render Home, Orders, About */}
      <footer>Footer</footer>
    </>
  );
}

export default App;
