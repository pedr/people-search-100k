import { useReducer } from 'react';
import './App.css';

function App() {

  // const [state, dispatch] = useReducer(reducer, startState);

  // return <h1>Hello</h1>
  return (
    <UserListContainer>
      <Filters />
      <UserList />
    </UserListContainer>
  );
}

function Filters() {

  return <div>
    <input type="text" placeholder="Search by name..." />
    <input type="number" placeholder="18" />
  </div>
}

function UserList() {
  return <div>
    <div>
      <label>Name:</label>
      <label>Age:</label>
    </div>
    <ul>
      <li>
        <span>
          Pedro L Fernandes
        </span>
        <span>
          28
        </span>
      </li>
      <li>
        <span>
          Matheus Souza
        </span>
        <span>
          10
        </span>
      </li>
      <li>
        <span>
          Luis Silva (Chico)
        </span>
        <span>
          19
        </span>
      </li>
    </ul>
  </div>
}

function UserListContainer(props) {
  return <div>
    {props.children}
  </div>
}

export default App;
