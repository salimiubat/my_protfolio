'use client'
// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import Navbar from '../components/Navbar';
import LoginPage from './Login';
import Registration from './Registration';


const UserLoginRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rePassword, setRePassword] = useState('');


  const [activeTab, setActiveTab] = useState('login');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/token/', {
        username,
        password,
      });
      const { access, refresh } = response.data;
      console.log('Login pass:', access);
      localStorage.setItem('token', access);

    } catch (error) {
      console.error('Login failed:', error);
    }
  };


  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/', {
        username,
        email,
        phone,
        password,

      });
      console.log('Registration success:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };


  return (
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


              <LoginPage
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            </div>
            <div
              className={`tab-pane fade ${activeTab === 'signup' ? 'show active' : ''}`}
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <Registration
                username={username}
                email={email}
                phone={phone}
                password={password}
                setUsername={setUsername}
                setEmail={setEmail}
                setPhone={setPhone}
                setPassword={setPassword}
                handleRegistration={handleRegistration}
                rePassword={rePassword}
                setRePassword={setRePassword}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginRegistration;

