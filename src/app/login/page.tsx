'use client'
// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './login.css'
import Navbar from '../components/Navbar';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login'); // Added state for active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/token/', {
        username,
        password,
      });
  
      const { access_token, refresh_token } = response.data;
  
      // Log the tokens to the console
      const { access, refresh } = response.data;
      console.log("Access Token : "+access);

      localStorage.setItem('token', response.data.access);
      
      
  
      // You can also store the refresh token if needed
      localStorage.setItem('refreshToken', refresh_token);
  
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

  return (
    // <div>
    //   <h2>Login</h2>
    //   <form>
    //     <label>
    //       Username:
    //       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    //     </label>
    //     <br />
    //     <label>
    //       Password:
    //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     </label>
    //     <br />
    //     <button type="button" onClick={handleLogin}>
    //       Login
    //     </button>
    //   </form>
    // </div>
    <div>
    <Navbar showContent={false} />
    <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item text-center">
              <a
                className={`nav-link ${activeTab === 'login' ? 'active btl' : ''}`}
                onClick={() => handleTabChange('login')}
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected={activeTab === 'login' ? 'true' : 'false'}
              >
                Login
              </a>
            </li>
            <li className="nav-item text-center">
              <a
                className={`nav-link ${activeTab === 'signup' ? 'active btr' : ''}`}
                onClick={() => handleTabChange('signup')}
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected={activeTab === 'signup' ? 'true' : 'false'}
              >
                Signup
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`}
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="form px-4 pt-5">
                <input
                  type="text"
                  name=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  placeholder="Username"
                />
                <input
                  type="password"
                  name=""
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button className="btn btn-dark btn-block" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>
            <div
              className={`tab-pane fade ${activeTab === 'signup' ? 'show active' : ''}`}
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="form px-4">
                <input type="text" name="" className="form-control" placeholder="Name" />
                <input type="text" name="" className="form-control" placeholder="Email" />
                <input type="text" name="" className="form-control" placeholder="Phone" />
                <input type="text" name="" className="form-control" placeholder="Password" />
                <button className="btn btn-dark btn-block">Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

