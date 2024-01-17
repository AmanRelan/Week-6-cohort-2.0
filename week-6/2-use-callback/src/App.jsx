import "./App.css";
import { Assignment1 } from "./components/Assignment1";
import { Assignment2 } from "./components/Assignment2";

function App() {
  return (
    <>
      <Assignment1 />
      <div style={{ marginTop: 40 }}>
        <h1>Assignment-2</h1>
        <Assignment2 />
      </div>
    </>
  );
}

export default App;
