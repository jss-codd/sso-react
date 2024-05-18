import React, { useState } from 'react'
import {useLocation} from 'react-router-dom';
import {confirmSignUp} from 'aws-amplify/auth';

const Home = () => {

  return (
    <div>
          <div className="mb-3">
      <label>Wellcome to Dashboard</label>
      <div>Now You are Logged </div>
    </div>
    {/* <button  onClick={handleSubmit} type="button" className="btn btn-primary">
          submit otp
        </button> */}

    </div>
  )
}

export default Home
