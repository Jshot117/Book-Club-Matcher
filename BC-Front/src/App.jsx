import bookList from './Components/book-list'
import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <div>
        <Profile></Profile>
        <bookList></bookList>
      </div>
    </>
  );
}

export default App;
