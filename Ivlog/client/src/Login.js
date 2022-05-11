import {Link} from 'react-router-dom';
import {useState} from  'react'
import React from 'react';



function Login({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    // setting up username 
    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username,
            password
        }
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((r) => r.json())
          .then((user) => onLogin(user));
      }
      
      console.log(username)
    return(

        <div className="login-background">
            <div className = "login-">
                <div className = 'login-header' >
                    <h1>welcome to iVlog please Login</h1>
                </div>
                <form onSubmit= {handleSubmit}>
                    <div className = 'user-pass'> 
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
                        {/* <Link to="/">  */}
                            <button type="submit">Login</button>
                        {/* </Link> */}
                    <div> 
                        <h1> need to make an account? please 
                            <Link to='/signup'> 
                                <button type="submit">Signup</button>
                            </Link>
                        </h1>
                    </div>
                </form>
            </div>  
       </div>
    )
}

export default Login;