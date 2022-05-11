import {Link} from 'react-router-dom';
import {useState} from  'react'
import React from 'react';



function Signup({onSignup, setCurrentUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");

    // setting up username 
    function handleSubmit(e) {
        const user = {
            username,
            password,
            firstName,
            lastName
        }
        e.preventDefault();
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((r) => {
              if (r.ok){
                  r.json().then(setCurrentUser)
              }
          })
      }



    
      console.log(username)
    return(
        <div className="login-background">
            <div className = "login-">
                <div className = 'login-header' >
                    <h1>welcome to iVlog please create an account</h1>
                </div>
                <form onSubmit= {handleSubmit}>
                    <div className ='create-login'> 
                        <div className = 'user-pass'> 
                            <input 
                            type="text" 
                            placeholder="FirstName" 
                            className="firstName"
                            value={firstName}
                            onChange={(e) => setFirstname(e.target.value)}
                            />
                            <input 
                            type="text" 
                            placeholder='lastName' 
                            className="lastName"
                            value={lastName}
                            onChange={(e) => setLastname(e.target.value)}
                            />
                            <input 
                            type="text" 
                            placeholder="username" 
                            className= 'username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            <input 
                            type="password" 
                            placeholder="password" 
                            className= 'password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div> 
                            <Link to="/login"> 
                                <button type="submit"> 
                                    create account
                                </button>
                            </Link>
                        <div> 
                            <h1> Already have an account? 
                                <Link to='/login'> 
                                    <button>Login</button>
                                </Link>
                            </h1>
                        </div>
                    </div>
                </form>
            </div>  
       </div>
    )
}

export default Signup;