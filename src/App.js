import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  // store: use auth state to conditionally show auth or user profile component in app
  return (
    <React.Fragment>
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
