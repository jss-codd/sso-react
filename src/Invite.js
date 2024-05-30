import React from 'react';
import { useParams } from 'react-router-dom'

const InvitationSuccess = () => {
    const  { token } = useParams();
    console.log("--token---",token);
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Invitation Sent Successfully!</h1>
      <p style={styles.message}>Your invitation has been sent. Thank you!</p>
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
  message: {
    fontSize: '1.2em',
    color: '#333',
    margin: '0.5em 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#4caf50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '1em',
  }
};

export default InvitationSuccess;
