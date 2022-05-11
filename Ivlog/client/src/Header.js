// import { Container, Navbar, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import React from 'react';


function Header({ user, setUser }) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) =>{
      if(r.ok)
      setUser(null)
    });
  }
  
  return (
    <div className="header">
      <div className="logo"></div>
         <h1 className="font">Ivlog</h1>
      <div className="rightSide">
        {user ? (
          <div className ='login-buttton'>
            <h1>Hello {user.username}</h1>
            <Link to='/login'> 
            <button type="submit" onClick={handleLogout}>Log out</button>
            </Link>
          </div>
        ) : (
          <div className = 'login-button' >
            <h3>Why are you not logged in</h3>
            <Link to='/login'> 
                <button>Log in</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
