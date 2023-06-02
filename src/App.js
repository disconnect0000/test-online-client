import "./App.css";
import axios from "axios";
function App() {
  function handleReq() {
    axios
      .get("https://test-oonline.onrender.com/test")
      .then((res) => console.log(res.data));
  }
  return (
    <div className="App">
      <button onClick={handleReq}>Request</button>
    </div>
  );
}

export default App;
