import React from 'react';
import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.age} years young ❄️)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
