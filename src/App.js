import './App.css';
import React, { useState, useEffect } from 'react'
import Login from './pages/Login/Login';
import Home from './pages/home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound';
import CircularProgress from '@mui/material/CircularProgress'
import PersistentDrawerLeft from './Components/Drawer/Drawer';
import OrderHIstory from './pages/Order-History/OrderHIstory';
import Passbook from './pages/Passbook/Passbook';
import Profile from './pages/Profile/Profile';
import Card from './Components/card/Card'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [ isLoggedInChecked, setLoggedInChecked] = useState(false)



  // ! Get token from storage
  // ! If available, then home else login


  useEffect(function(){
    const token = localStorage.getItem('token')
    if(token) {
      setIsLoggedIn(true)
    }
  setLoggedInChecked(true)    
  }, [])


  function setAuth(){
    setIsLoggedIn(true)
  }
  let content = ""
  if(isLoggedInChecked) {
    if(isLoggedIn) {
      content =
      <>
        <PersistentDrawerLeft>
      <Routes>
          <Route exact path="/" element = { <Home /> }></Route>
          <Route exact path="/home" element = { <Home /> }></Route>
          <Route exact path="/Order-history" element = {<OrderHIstory />}></Route>
          <Route exact path="/Passbook" element = {<Passbook />}></Route>
          <Route exact path="/Profile" element = {<Profile />}></Route>
          <Route exact path="*" element = { <NotFound /> }></Route>
        </Routes>
        </PersistentDrawerLeft>
      </>
    } else {
      content = 
      <Login setAuth = {setAuth} />
    }
  } else {
    content = <CircularProgress />
  }

  return (
    <div className="App">
      <BrowserRouter> 
     { content }
      </BrowserRouter>
    </div>
  );
}

export default App;