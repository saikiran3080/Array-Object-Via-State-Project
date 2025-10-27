import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    setCounter([...counter, { id: counter.length + 1, value: 0 }]);
  };

  const IncrementCounter = (id) => {
    setCounter(
      counter.map((item) =>
        item.id === id ? { ...item, value: item.value + 1 } : item
      )
    );
  };
  return (
    <div className="container">
      <button className="buttons" onClick={addCounter}>
        Add Counter
      </button>
      <ul>
        {counter.map((counter) => (
          <li key={counter.id}>
            Counter {counter.id} : {counter.value}
            <button
              class="buttons"
              onClick={() => IncrementCounter(counter.id)}
            >
              Increment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
