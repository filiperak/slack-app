import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Header from './components/header/Header';
import styled from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/login/Login';
import { Auth, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [user,loading] = useAuthState(auth)
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login/>
        ):(
          <>
          <Header/>
          <AppBody>
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Chat/>}/>
          </Routes>
          </AppBody>
        </>
        )}

      </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
  display:flex;
  height: 100vh;
`;