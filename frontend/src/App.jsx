import { Outlet } from "react-router-dom";
import './App.css';
import './index.css';
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Authprovider from "./context/Addcontext";
function App() {
  return (
    <>
    <Authprovider>
      <Navbar/>

      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
      <Outlet /> {/* This will render Home, Orders, About */}
      </main>
      <Footer/>
      </Authprovider>
    
    </>
  );
}

export default App;
