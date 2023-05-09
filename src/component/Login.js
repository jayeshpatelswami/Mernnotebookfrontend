import React,{useState} from "react";
import {useHistory } from "react-router-dom"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
 let history = useHistory();
  const [information, setinformation] = useState({email:"",password:""})
  const handalsubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:10000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email : information.email, password : information.password })
    });
    const json = await response.json();
    // console.log(json);
    if (json.sussec) {
      localStorage.setItem('token',json.authtoken);
      history.push("/");
      localStorage.setItem('email',information.email);
    }else{
      alert("invalid username or password ")
    }
  };
  
  
  const onchanged = (e) =>{
    setinformation({...information , [e.target.name] : e.target.value})
  } 
  
  return (
    <>
    <div className="container">
      <form onSubmit={handalsubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onchanged}
            value={information.email} name="email"
             minLength={5} required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" minLength={4} required name="password"  value={information.password} onChange={onchanged} id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </div>
    <div className="container  mx-3 my-4">
      <Link to="/signup">Don't have an Account</Link>
    </div>
    </>
      );
};

export default Login;
