import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './app/Login';
import NavegadorInferior from './app/NavegadorInferior';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (typeof setImmediate === 'undefined') {
    global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
  }
  
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <NavegadorInferior />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
}
