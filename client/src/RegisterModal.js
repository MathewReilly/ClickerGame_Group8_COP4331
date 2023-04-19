import React, { useState } from 'react'
import "./RegisterModal.css"

function RegisterModal({ closeModal }) {
   
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:5001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        nickname,
      }),
    })

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Register an account to keep track of your score!</h1>
        </div>
        <div className="body">
          <form onSubmit={registerUser}>
            <input 
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Name"
            /><br />
            <input 
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            /><br />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            /><br />
            <input
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              type="nickname"
              placeholder="nickname"
            /><br />
            <input type="submit" value="Register" />
          </form>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button id="confirmBtn">Create Acount

          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;