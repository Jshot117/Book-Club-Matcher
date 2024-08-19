
import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Components/Profile";
import BookList from './Components/book-list'

function App() {
  return (
    <>
      <Profile></Profile>
      <BookList></BookList>
    </>
  );
}

export default App;
