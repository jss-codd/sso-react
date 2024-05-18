import React, { useState } from 'react'
import {fetchAuthSession,signIn} from 'aws-amplify/auth';


const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit =  async () =>{
        try {

            const resp = await signIn({
                username: email,
                password: password
            })
            console.log("--res-",resp);

            const session = await fetchAuthSession();
            console.log("--session-",JSON.stringify(session,null,2));
            console.log("--tokens?.idToken?.toString();---",session.tokens?.idToken?.toString());

            
        } catch (error) {
             console.log("--error-",error);
        }
    }
  return (
    <form>
    <h3>Sign In</h3>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>
    <div className="d-grid">
      <button  onClick={handleSubmit} type="button" className="btn btn-primary">
        Submit
      </button>
    </div>
    <p className="forgot-password text-right">
      Forgot <a href="#">password?</a>
    </p>
  </form>
  )
}

export default Login
