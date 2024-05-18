import React, { useState } from 'react'
import {useLocation} from 'react-router-dom';
import {confirmSignUp} from 'aws-amplify/auth';

const OTP = () => {
    const location = useLocation();
    const [confirmationCode,setConfirmationCode] = useState("")
    const email  = location?.state?.email
    const handleSubmit = async ()=>{
        console.log("--email--",email,"confirmationCode",confirmationCode);
        try {
         const response =   await  confirmSignUp({username: email, confirmationCode: confirmationCode })
         console.log("--response--",response);
            
        } catch (error) {
            console.log("--error",error);
        }
    }
  return (
    <div>
          <div className="mb-3">
      <label>ENTER OTP</label>
      <input
        type="text"
        className="form-control"
        placeholder="otp"
        name="otp"
        onChange={(e)=>setConfirmationCode(e.target.value)}
      />
    </div>
    <button  onClick={handleSubmit} type="button" className="btn btn-primary">
          submit otp
        </button>

    </div>
  )
}

export default OTP
