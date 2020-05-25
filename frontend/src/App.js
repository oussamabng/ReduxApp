import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./Components/Post.jsx";
import AddPost from "./Components/AddPost.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddPost />
        <Post />
      </header>
    </div>
  );
}

export default App;
