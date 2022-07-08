import { useCallback, useReducer, useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

const reducer = (state, action) => {
  switch (action) {
    case 'tang':
      return state + 1;
    case 'giam':
      return state - 1;
    case 'xoa-tat-ca':
      return 0
    default:
      return state
  }
}

const reducer2 = (state, action) => {
  switch (action.type) {
    case 'gan-gia-tri':
      return action.data
    default:
      return state
  }
}

const initState = {
  loading: false,
  data: [],
  error: null
}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.data
      }

    case 'GET_USER_ERROR':
      return {
        ...state,
        data: [],
        error: action.data
      }
    default:
      return state
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, 0)
  const [count2, dispatch2] = useReducer(reducer2, 0)
  const [user, userDispatch] = useReducer(userReducer, initState)

  const getUsers = () => {
    userDispatch({
      type: 'GET_USER_REQUEST'
    })

    setTimeout(() => {

    }, 2000);


    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(res => {
        userDispatch({
          type: 'GET_USER_SUCCESS',
          data: res
        })
      })
      .catch(err => {
        userDispatch({
          type: 'GET_USER_ERROR',
          data: err
        })
      })
  }

  return (
    <>
      <button onClick={getUsers}>GET USERS</button>
      {user.loading ? <p>User loading </p> : <p>{JSON.stringify(user)}</p>}
      <p>Count: {count}</p>
      <button onClick={() => dispatch('tang')}>Tang</button>
      <button onClick={() => dispatch('giam')}>Giảm</button>
      <button onClick={() => dispatch('xoa-tat-ca')}>Xóa hết dữ liệu</button>

      <p>Count 2: {count2}</p>
      <button onClick={() => dispatch2({
        type: 'gan-gia-tri',
        data: 10
      })}>Gán giá trị</button>
    </>
  );
}

export default App;
