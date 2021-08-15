import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userData, setUserData] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        {
          id: Math.floor(Math.random() * 50) + 1,
          userName: uName,
          age: uAge,
        },
      ];
    });
  };

  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
