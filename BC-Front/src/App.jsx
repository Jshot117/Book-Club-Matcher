import bookList from './Components/book-list'
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <Profile></Profile>
      <bookList></bookList>
    </>
  );
}

export default App;
