import { useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

function App() {
  const [users, setUsers] = useState([])
  const getData = (type) => {
    return fetch(`https://reqres.in/api/${type}`)
  }

  const handleClick = () => {
    getData('users')
      .then((res) => res.json())
      .then((res) => {
        const users = res.data
        setUsers(users)
      })
  }

  return (
    <>
      <p>Data:</p>
      <button onClick={handleClick}>Get Users Data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData} />
    </>
  );
}

export default App;
