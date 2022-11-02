import React, { useState } from "react";
import Axios from 'axios';
import "../App.css";


import { useNavigate } from "react-router-dom";





function App() {

  let navigate = useNavigate();
  let path = '/diagram'; 
  
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  const register = () => {
    Axios.post('http://localhost:3000/register', {
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
    });
  }

  const login = () => {
    Axios.post('http://localhost:3000/login', {
      username: username,
      password: password
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        //setLoginStatus(response.data[0].username);
        navigate(path);
        
      }
    });
  }

  return (
    <div className="App">
      <div className="register">
        <h1>Register</h1>
        <label>Username</label>
        <input 
          type="text" 
          onChange={(e) => {
            setUsernameReg(e.target.value)
          }}
        ></input>
        <label>Password</label>
        <input 
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value)
          }}
        ></input>
        <button onClick={register}>Register</button>
      </div>


      <div className="login">
        <h1>Login</h1>
        <label>Username</label>
        <input 
          type="text" 
          onChange={(e) => {
            setUsername(e.target.value)
          }}></input>
        <label>Password</label>
        <input  
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}></input>
        <button onClick={login}>Login</button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
