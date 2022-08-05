import {NavLink, useNavigate} from 'react-router-dom';
import {useState} from  'react'
import React from 'react';



function Signup({onSignup, setCurrentUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const navigate = useNavigate()

    // setting up username 
    function handleSubmit(e) {
        const user = {
            username,
            password,
            firstName,
            lastName
        }
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((r) => {
              if (r.ok){
                  r.json().then(setCurrentUser)
                  navigate('/login')
              }
          })
      }



    
      console.log(username)
    return(
        <div className="login-background">
            <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" > 
                <div className="card-body p-5 text-center">
      
                  <div className="mb-md-5 mt-md-4 pb-5">
                  <form  onSubmit= {handleSubmit}>
                    <h2 className="fw-bold mb-2 text-uppercase">SignUp</h2>
                    <p className="text-white-50 mb-5">Welcome to iVlog please create an account</p>
                    <div className="form-outline form-white mb-4">
                      <input 
                        className="form-control form-control-lg"
                        type="text" 
                        // placeholder="password" 
                        value={firstName}
                        onChange={(e) => setFirstname(e.target.value)}
                        />
                      <label className="form-label" for="typePasswordX">Firstname</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input 
                        className="form-control form-control-lg"
                        type="text" 
                        // placeholder="password" 
                        value={lastName}
                        onChange={(e) => setLastname(e.target.value)} 
                        />
                      <label className="form-label" for="typePasswordX">Lastname</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                    <input 
                        className="form-control form-control-lg"
                        type="text" 
                        // placeholder="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />                
                    <label className="form-label" for="typeEmailX">Username</label>
                    </div>
      
                    <div className="form-outline form-white mb-4">
                      <input 
                        className="form-control form-control-lg"
                        type="password" 
                        // placeholder="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} id="typePasswordX"  />
                      <label className="form-label" for="typePasswordX">Password</label>
                    </div>

                   <button className="btn btn-outline-light btn-lg px-5" type="submit">Signup</button>
                   </form>
                  </div>     
                  
                  <div>
                    <p className="mb-0">Already have an account? <a href="#!" className="text-white-50 fw-bold">
                      <NavLink to='/login'> 
                                <button type="submit">Login</button>
                       </NavLink>
                      </a>
                    </p>
                  </div>
      
                </div>
              </div>
            </div> 
          </div>
        </div>
        </section> 
                {/* <div className = 'login-header' >
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
                            <NavLink to="/login"> 
                                <button type="submit"> 
                                    create account
                                </button>
                            </NavLink>
                        <div> 
                            <h1> Already have an account? 
                                <NavLink to='/login'> 
                                    <button>Login</button>
                                </NavLink>
                            </h1>
                        </div>
                    </div>
                </form> */}
            </div>  
    )
}

export default Signup;