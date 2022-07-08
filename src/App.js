import { useCallback, useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('David')

  const getData = () => {

  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <ChildComponent name={name} getData={getData} />
    </>
  );
}

export default App;
