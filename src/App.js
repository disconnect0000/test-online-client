import "./App.css";
import axios from "axios";
function App() {
  function handleReq() {
    axios.get("http://localhost:3001").then((res) => {
      console.log(res);
    });
  }
  return (
    <div className="App">
      <button onClick={handleReq}>Request</button>
    </div>
  );
}

export default App;
