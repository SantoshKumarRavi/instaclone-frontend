import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {PostviewPage,LandingPage} from './Layouts/index';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
function App() {
const [name,setName]=useState("")
function displayName(){
  // console.log("clikc")
  alert(name)
}
  return (
    <div className="App">

    <input type="text" name="firstname" value={name} onChange={(e)=>setName(e.target.value)}/>   
   <button onClick={()=>displayName()}>submit</button>
     {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={  <LandingPage />}>
          </Route>
          <Route path="/Postview" element={  <PostviewPage />}>
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <p>hfusdf</p> */}
      
    </div>
  );
}

export default App;
