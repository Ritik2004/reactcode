import { useRef } from "react";

export default function App() {
  let inputRef = useRef(null);
  function handleInput() {
    console.log("click");
    inputRef.current.value = "100";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }
  return (
    <div className="App">
      <h1>useRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle input</button>
    </div>
  );
}
