
import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Components/Profile";
import BookList from './Components/book-list'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
