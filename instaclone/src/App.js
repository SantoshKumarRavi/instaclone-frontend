import logo from './logo.svg';
import './App.css';
import React from 'react';
import {PostviewPage,LandingPage} from './Layouts/index';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={  <LandingPage />}>
          </Route>
          <Route path="/Postview" element={  <PostviewPage />}>
          </Route>
        </Routes>
      </BrowserRouter>       
    </div>
  );
}

export default App;
