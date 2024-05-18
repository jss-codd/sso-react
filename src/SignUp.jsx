import React, { useState } from "react";
import {signUp} from 'aws-amplify/auth';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setComapnyName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async  () =>{
    console.log("fullName",fullName,"email",email,"companyName",companyName,"password",password);

    try {
        const response = await signUp({
            username: email,
            password,
            options: {
                userAttributes: {
                    email,
                    name: fullName,
                    'custom:companyName':companyName,
                },
                // autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
            },
        });
        console.log("---response--",JSON.stringify(response,null,2));
        navigate("/otp",{ state: {email} });
        
    } catch (error) {
        console.log("--error-",error);
    }
  }

  return (
    <form>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Full Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="full name"
          name="fullname"
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>company name</label>
        <input
          type="text"
          className="form-control"
          placeholder="companyname"
          name="companyName"
          onChange={(e)=>setComapnyName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button  onClick={handleSubmit} type="button" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
};

export default SignUp;
