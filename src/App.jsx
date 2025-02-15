import { useState } from "react";
import ElonGif from "./assets/ElonReact.gif";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://hishamalahmadi.com/" target="_blank">
          <img src={ElonGif} className="Elon" alt="ElonMusk Gif" />
        </a>
      </div>
      <h1>Hello React!</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <p className="read-the-docs">Click on Elon to go to Hisham&apos;s Site</p>
    </>
  );
}

export default App;
