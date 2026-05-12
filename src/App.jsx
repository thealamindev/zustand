import "./App.css";
import useCount from "./store/count";

function App() {
  const { count, increment, dercrement, reset } = useCount((state) => state);

  return (
    <>
      <h1>Home Page</h1>
      <h3>{count}</h3>
      <button onClick={increment}>Incerment+</button>
      <button onClick={dercrement}>Incerment-</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;
