import { Outlet } from "react-router-dom";
import './App.css';
import './index.css';
import React from "react";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar/>

      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
      <Outlet /> {/* This will render Home, Orders, About */}
      </main>
      <footer>Footer</footer>
    
    </>
  );
}

export default App;
