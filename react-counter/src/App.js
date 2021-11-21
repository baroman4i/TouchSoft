import './App.css'
import React from 'react'
// не вижу смысла разбивать на компоненты
function App() {
  const [count, setCount] = React.useState(0)
  const even = React.useMemo(() => !(count % 2), [count])
  return (
    <div 
      className="container" 
      style={{backgroundColor: `${even ? 'green' : 'red'}`}}
    >
      <div className="card text-center my-5">
        <div className="card-body my-5">
          <h2 className="card-title border">{count}</h2>
          <div className="card-text my-5 border">
            {even ? "Введено чётное число" : "Введено не чётное число"}
          </div>
          <button 
            className="btn btn-success mx-3" 
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button 
            className="btn btn-secondary mx-3" 
            onClick={() => setCount(0)}
            disabled={count === 0}
          >
            Reset
          </button>
          <button 
            className="btn btn-danger mx-3" 
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
