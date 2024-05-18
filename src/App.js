import React ,{useEffect,useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import {Amplify} from 'aws-amplify';
import aws_exports from './aws-exports';
import OTP from './OTP'
import Home from './Home'
import {fetchAuthSession} from 'aws-amplify/auth';


Amplify.configure(aws_exports);
function App() {
 const [ token , setToken] = useState("")
  useEffect(()=>{
    const getSession=async()=>{
      const session = await fetchAuthSession();
      if(session.tokens?.idToken?.toString()){
        setToken(session.tokens?.idToken?.toString());
      }
    }  
    getSession();
  },[])
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
             {!token &&  <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/otp'}>
                   OTP
                  </Link>
                </li>
              </ul>}
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/otp" element={<OTP />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App