import React, { useState, useEffect } from 'react';

// set default state in createContext
const AuthContext = React.createContext({
  // isLoggedIn: false,
  // onLoggedOut: () => {}, // just dummy function here for IDE hint in Navigation.js
  // onLogin: (email, password) => {},
});

export const AuthContextProviderCustom = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.clear('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// need to provide Context to be used in other components (once this Context wraps around them)
export default AuthContext; // here only one context so default. can have multiple contexts
