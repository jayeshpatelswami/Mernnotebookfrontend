import React,{useState} from "react";
import {useHistory } from "react-router-dom"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {


  
 let history = useHistory();
 const [information, setinformation] = useState({name:"",email:"",password:""})
 const handalsubmit = async (e) => {
   e.preventDefault();
   const response = await fetch("http://localhost:5000/api/auth/createuser", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({name : information.name, email : information.email, password : information.password })
   });
   const json = await response.json();
  //  console.log(json);
   if (json.sussec) {
     localStorage.setItem('token',json.authtoken);
     history.push("/");
     localStorage.setItem('email',information.email);
   }else{
     alert("invalid username or password")
   }
 };

 
 const onchanged = (e) =>{
   setinformation({...information , [e.target.name] : e.target.value});
 } 



  return (
    <>
    <div className="container">
      <form onSubmit={handalsubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name 
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            onChange={onchanged}
            value={information.name}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            required minLength={5}
            onChange={onchanged}
            value={information.email}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required minLength={4}
            onChange={onchanged}
            value={information.password}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </div>
    <div className="container mx-3 my-4">
      <Link to="/login">Already have an Account</Link>
      </div>
      </>
  );
};

export default Signup;
