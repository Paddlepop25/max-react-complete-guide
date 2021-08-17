import React from 'react';

// set default state in createContext
const AuthContext = React.createContext({
  contextIsLoggedIn: false,
});

// need to provide Context to be used in other components (once this Context wraps around them)
export default AuthContext; // here only one context so default. can have multiple contexts
