import { useCallback, useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

function App() {

  const [name, setName] = useState('David')

  const getData = useCallback(() => {

  }, [])

  function NewComponent({ children }) {
    const [count, setCount] = useState(0)
    return (
      <>
        <p>Outer count: {count}</p>
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Add</button>
          {children}
        </div>
      </>

    )
  }

  return (
    <>
      <NewComponent>
        <ChildComponent name={name} getData={getData} />
      </NewComponent>
    </>
  );
}

export default App;
