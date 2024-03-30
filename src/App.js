import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Header from './components/header/Header';
import styled from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/login/Login';
import { auth } from './firebase';
import { SwapSpinner } from 'react-spinners-kit';

function App() {
  const [user,loading] = useAuthState(auth);
  if(loading) {
      return(
          <AppLoading>
              <AppLoadingContent>
              <SwapSpinner/>
              </AppLoadingContent>
          </AppLoading>
      )
  }
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
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
`;
const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;