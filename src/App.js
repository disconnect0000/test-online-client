import "./App.css";
import axios from "axios";
import React from "react";
import { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  function handleReq() {
    axios
      .get("https://test-oonline.onrender.com/test")
      .then((res) => console.log(res.data));
  }

  function getUsers() {
    axios
      .get("https://test-oonline.onrender.com/")
      .then((res) => console.log(res.data));
  }
  function importUser() {
    axios
      .post("http://localhost:5000", { username: value, password: value })
      .then((res) => console.log(res.data));
  }

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className="App">
      <button onClick={handleReq}>Request</button>
      <button onClick={getUsers}>Users</button>
      <input value={value} onChange={handleChange} />
      <button onClick={importUser}>Import User</button>
    </div>
  );
}

export default App;
