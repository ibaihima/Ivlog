import { Routes, Route} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import React from "react"
import Header from './Header'
import HomePage from "./Hompage";
import Login from "./Login"
import Signup from "./Signup"
import Sidebar from './Sidebar'


function App() {

// loging in /saved user
const [user, setUser] = useState(null);

  let navigate = useNavigate();

  function onLogin(user){
    setUser(user)
    // navigate("/")
    console.log(user)

}


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          navigate("/")
        });
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <Routes>
          <Route exact path="/"
          element={
          <><Header user={user} setUser={setUser}/>
          <HomePage user={user} /></> 
          }/>
          <Route path="login"
          element={<Login onLogin={onLogin} />} />
          <Route path='signup'
          element={<Signup/>} />
      </Routes>
      
    </div>
  );
}

export default App;