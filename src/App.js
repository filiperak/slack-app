import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Header from './components/header/Header';
import styled from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header/>
          <AppBody>
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Chat/>}/>
          </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
  display:flex;
  height: 100vh;
`;