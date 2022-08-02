import {NavLink, useNavigate} from 'react-router-dom';
import {useState} from  'react';
import React from 'react';
import './Login.css'




function Login({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
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
          .then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                onLogin(user)
                navigate('home')
                }
              );
            } else {
              r.json().then((err) => console.log(err.errors));
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
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                    <div className="form-outline form-white mb-4">
                      <input 
                        className="form-control form-control-lg" 
                        type="text" 
                        // placeholder="Username" 
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
                   <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                   </form>
                  </div>     
                  
                  <div>
                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">
                      <NavLink to='/signup'> 
                                <button type="submit">Signup</button>
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
           {/* <div className = "login-">
                <div className = 'login-header' >
                    <h1>Welcome To iVlog Please Login</h1>
                </div>
                <form className ="loginBody" onSubmit= {handleSubmit}>
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
                        <button className="loginButton" type="submit">Login</button>
                </form>
                    <div> 
                        <h1>{`Need To Make An Account? Please  `}
                            <Link to='/signup'> 
                                <button type="submit">Signup</button>
                            </Link>
                        </h1>
                    </div>
            </div>   */}
       </div> 
    )
    //   <div className="login-background">
    //     <section className="vh-100 gradient-custom">
    //     <div className="container py-5 h-100">
    //       <div className="row d-flex justify-content-center align-items-center h-100">
    //         <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    //           <div className="card bg-dark text-white" style="border-radius: 1rem;">
    //             <div className="card-body p-5 text-center">
      
    //               <div className="mb-md-5 mt-md-4 pb-5">
      
    //                 <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
    //                 <p className="text-white-50 mb-5">Please enter your login and password!</p>
      
    //                 <div className="form-outline form-white mb-4">
    //                   <input type="email" id="typeEmailX" className="form-control form-control-lg" />
    //                   <label className="form-label" for="typeEmailX">Email</label>
    //                 </div>
      
    //                 <div className="form-outline form-white mb-4">
    //                   <input type="password" id="typePasswordX" className="form-control form-control-lg" />
    //                   <label className="form-label" for="typePasswordX">Password</label>
    //                 </div>
      
    //                 <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
      
    //                 <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
      
    //                 <div className="d-flex justify-content-center text-center mt-4 pt-1">
    //                   <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
    //                   <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
    //                   <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
    //                 </div>
      
    //               </div>
    //               <div className = "login-">
    //             <div className = 'login-header' >
    //                 <h1>Welcome To iVlog Please Login</h1>
    //             </div>
    //             <form className ="loginBody" onSubmit= {handleSubmit}>
    //                 <div className = 'user-pass'> 
    //                     <input
    //                     type="text" 
    //                     placeholder="username" 
    //                     className= 'username'
    //                     value={username}
    //                     onChange={(e) => setUsername(e.target.value)}
    //                     />
    //                     <input 
    //                     type="password" 
    //                     placeholder="password" 
    //                     className= 'password'
    //                     value={password}
    //                     onChange={(e) => setPassword(e.target.value)}
    //                     />
    //                 </div> 
    //                     <button className="loginButton" type="submit">Login</button>
    //             </form>
    //                 <div> 
    //                     <h1>{`Need To Make An Account? Please  `}
    //                         <Link to='/signup'> 
    //                             <button type="submit">Signup</button>
    //                         </Link>
    //                     </h1>
    //                 </div>
    //         </div>  
      
    //               <div>
    //                 <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
    //                 </p>
    //               </div>
      
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    
}

export default Login;

{/* <div className="login-background">
            <div className = "login-">
                <div className = 'login-header' >
                    <h1>Welcome To iVlog Please Login</h1>
                </div>
                <form className ="loginBody" onSubmit= {handleSubmit}>
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
                        <button className="loginButton" type="submit">Login</button>
                </form>
                    <div> 
                        <h1>{`Need To Make An Account? Please  `}
                            <Link to='/signup'> 
                                <button type="submit">Signup</button>
                            </Link>
                        </h1>
                    </div>
            </div>  
       </div> */}