import createFile from "./api/create-file";

import "./app.css";

export default function App() {

  return (
    <main>
      <h1>Bun runtime within SolidStart.js</h1>
      <button 
        class="increment" 
        onClick={() => createFile()}
        type="button"
      >
        Create File
      </button>
    </main>
  );
}
