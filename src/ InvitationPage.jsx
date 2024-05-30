// InvitationPage.js
import React, { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import InvitationSuccess from './Invite';
import { useParams } from 'react-router-dom'

const SEND_INVITATION = gql`
  mutation Mutation($token: String) {
  sendOrgJoinInviation(token: $token)
}
`;

const InvitationPage = () => {
    const  { token } = useParams();
    console.log("--token---",token);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const [sendInvitation, { loading, error }] = useMutation(SEND_INVITATION, {
    onCompleted: (data) => {
        console.log("--data---",data.sendOrgJoinInviation);
      if (data?.sendOrgJoinInviation =="success") {
        setSuccess(true);
      } else {
         alert(data);
      }
    },
  });
  useEffect(()=>{
    if(token){
        sendInvitation({ variables: { token } });
    }

  },[token])

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (email) {
//       sendInvitation({ variables: { email } });
//     } else {
//       alert('Please enter an email address.');
//     }
//   };

  if (success) {
    return <InvitationSuccess />;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Sending Invitation...</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2em',
    color: '#4caf50',
    margin: '0.5em 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    marginBottom: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#4caf50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    marginTop: '1em',
    color: 'red',
  }
};

export default InvitationPage;
