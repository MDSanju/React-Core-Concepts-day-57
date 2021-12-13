import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

function App() {
  return (
    <div className="App">
      {/* counter */}
      <MyComponent></MyComponent>

      {/* fetch */}
      <Users></Users>
    </div>
  );
}

// set state / a counter
function MyComponent() {
  // declare state
  const [multiplication, setMultiplication] = useState(1);
  // counter function
  const myCounter = () => setMultiplication(multiplication * 2);
  return (
    <div>
      <h1>Multiplication: <span style={{color: '#e95d2d'}}>{multiplication}</span></h1>
      <button style={{backgroundColor: 'orangered', color: 'white', border: 'none', padding: '9px 17px', fontWeight: '600'}} onClick={myCounter}>Increase</button>
    </div>
  );
}

// fetch API call
function Users() {
  // set state
  const [users, setUSers] = useState([]);

  // useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUSers(data))
  }, [])
  return (
    <div>
        {
          users.map(user => <User username={user.username} email={user.email}></User>)
        }
    </div>
  );
}

// component for dynamic fetch API
function User(props) {
  return (
    <div className="container">
      <div className="userIndv">
        <h3>Username: {props.username}</h3>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}

export default App;
